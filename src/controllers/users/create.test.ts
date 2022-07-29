import { Prisma } from '@prisma/client';

import { pathsApiV1 } from 'common/consts/pathsApi';
import { client } from 'common/test/client';
import { ResponseError } from 'common/types/apiV1';
import prisma from 'prisma/prismaClient';

describe('Controllers', () => {
  describe('Users - Create', () => {
    const userMock: Prisma.UserCreateInput = {
      email: 'users_create@test.com',
      username: 'users_create',
      name: 'users_create',
    };

    afterAll(async () => {
      await prisma.$disconnect();
    });

    it('should create new user when endpoint is called', async () => {
      const { status, data } = await client.post<Prisma.UserCreateInput, null>(pathsApiV1.USERS, { ...userMock });

      expect(status).toEqual(201);
      expect(data).toEqual(null);

      await prisma.user.delete({ where: { email: userMock.email } });
    });

    it('should throw an error when user already exists', async () => {
      await client.post<Prisma.UserCreateInput, null>(pathsApiV1.USERS, { ...userMock });

      const { status, data } = await client.post<Prisma.UserCreateInput, ResponseError>(pathsApiV1.USERS, {
        ...userMock,
      });

      expect(status).toEqual(400);
      expect(data).toEqual<ResponseError>({ message: 'An error occurred while creating the user' });

      await prisma.user.delete({ where: { email: userMock.email } });
    });
  });
});
