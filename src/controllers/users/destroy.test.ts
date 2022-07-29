import { Prisma } from '@prisma/client';

import { pathsApiV1 } from 'common/consts/pathsApi';
import { client } from 'common/test/client';
import prisma from 'prisma/prismaClient';

describe('Controllers', () => {
  describe('Users - Destroy', () => {
    const userMock: Prisma.UserCreateInput = {
      email: 'users_destroy@test.com',
      username: 'users_destroy',
      name: 'users_destroy',
    };

    beforeEach(async () => {
      await prisma.user.create({
        data: userMock,
      });
    });

    afterAll(async () => {
      await prisma.$disconnect();
    });

    it('should destroy the user when endpoint is called', async () => {
      const { status, data } = await client.delete(pathsApiV1.USERS_DETAILS(userMock.username));

      expect(status).toEqual(200);
      expect(data).toEqual(null);
    });
  });
});
