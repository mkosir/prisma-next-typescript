import { Prisma } from '@prisma/client';

import { pathsApiV1 } from 'common/consts/pathsApiV1';
import { ResponseError } from 'common/types/apiV1';
import { client } from 'common/utils/client';
import prisma from 'prisma/prismaClient';

describe('Controllers', () => {
  describe('Users - Destroy', () => {
    const userMock: Prisma.UserCreateInput = {
      email: 'users_destroy@test.com',
      username: 'users_destroy',
      name: 'users_destroy',
    };

    afterAll(async () => {
      await prisma.$disconnect();
    });

    it('should destroy the user when one exists in a database', async () => {
      await prisma.user.create({
        data: userMock,
      });

      const { status, data } = await client.delete<null>(pathsApiV1.USERS_DETAILS(userMock.username));

      expect(status).toEqual(200);
      expect(data).toEqual(null);
    });

    it('should return an error when trying to delete non-existent user', async () => {
      const userName = 'invalid_username';
      const { status, data } = await client.delete<ResponseError>(pathsApiV1.USERS_DETAILS(userName));

      expect(status).toEqual(400);
      expect(data).toEqual<ResponseError>({ message: 'An error occurred while deleting the user' });
    });
  });
});
