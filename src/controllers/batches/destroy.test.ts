import { Prisma } from '@prisma/client';

import { pathsApiV1 } from 'common/consts/pathsApiV1';
import { ResponseError } from 'common/types/apiV1';
import { client } from 'common/utils/client';
import prisma from 'prisma/prismaClient';

describe('Controllers', () => {
  describe('Batches - Destroy', () => {
    const supplierMock: Prisma.SupplierCreateInput = {
      id: 'batches_destroy',
      name: 'batches_destroy',
    };
    const batchMock: Prisma.BatchCreateInput & Required<Pick<Prisma.BatchCreateInput, 'id'>> = {
      id: 'batches_destroy',
      title: 'batches_destroy',
      purity: 1,
      weight: 1,
      supplier: { connect: { id: supplierMock.id } },
    };

    beforeAll(async () => {
      await prisma.supplier.create({
        data: supplierMock,
      });
    });

    afterAll(async () => {
      const deleteSupplierMock = prisma.supplier.delete({ where: { id: supplierMock.id } });

      await prisma.$transaction([deleteSupplierMock]);

      await prisma.$disconnect();
    });

    it('should destroy the batch when one exists in a database', async () => {
      await prisma.batch.create({
        data: batchMock,
      });

      const {
        response: { status },
        data,
      } = await client.delete<null>(pathsApiV1.BATCHES_DETAILS(batchMock.id));

      expect(status).toEqual(200);
      expect(data).toEqual(null);
    });

    it('should return an error when trying to delete non-existent batch', async () => {
      const id = 'invalid_id';
      const {
        response: { status },
        data,
      } = await client.delete<ResponseError>(pathsApiV1.BATCHES_DETAILS(id));

      expect(status).toEqual(400);
      expect(data).toEqual<ResponseError>({ message: 'An error occurred while deleting the batch' });
    });
  });
});
