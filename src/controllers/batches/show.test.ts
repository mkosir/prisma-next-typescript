import { Batch, Prisma } from '@prisma/client';

import { pathsApiV1 } from 'common/consts/pathsApiV1';
import { ResponseError } from 'common/types/apiV1';
import { client } from 'common/utils/client';
import prisma from 'prisma/prismaClient';

describe('Controllers', () => {
  describe('Batches - Show', () => {
    const supplierMock: Prisma.SupplierCreateInput = {
      id: 'batches_show',
      name: 'batches_show',
    };
    const batchMock: Prisma.BatchCreateInput & Required<Pick<Prisma.BatchCreateInput, 'id'>> = {
      id: 'batches_show',
      title: 'batches_show',
      purity: 1,
      weight: 1,
      supplier: { connect: { id: supplierMock.id } },
    };

    beforeAll(async () => {
      await prisma.supplier.create({
        data: supplierMock,
      });
      await prisma.batch.create({
        data: batchMock,
      });
    });

    afterAll(async () => {
      const deleteBatchMock = prisma.batch.delete({ where: { id: batchMock.id } });
      const deleteSupplierMock = prisma.supplier.delete({ where: { id: supplierMock.id } });

      await prisma.$transaction([deleteBatchMock, deleteSupplierMock]);

      await prisma.$disconnect();
    });

    it('should show a batch when valid id is provided', async () => {
      const { status, data } = await client.get<Batch>(pathsApiV1.BATCHES_DETAILS(batchMock.id));

      expect(status).toEqual(200);
      expect(data.id).toEqual(batchMock.id);
    });

    it('should show batch not found error when invalid id is provided', async () => {
      const id = 'invalid_id';
      const { status, data } = await client.get<ResponseError>(pathsApiV1.BATCHES_DETAILS(id));

      expect(status).toEqual(404);
      expect(data).toEqual<ResponseError>({ message: `Batch id:'${id}' can't be found` });
    });
  });
});
