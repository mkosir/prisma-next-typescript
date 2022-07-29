import { Prisma } from '@prisma/client';

import { pathsApiV1 } from 'common/consts/pathsApi';
import { client } from 'common/test/client';
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
      const { status, data } = await client.post<Prisma.UserCreateInput, null>(
        pathsApiV1.USERS,
        { ...userMock },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      expect(status).toEqual(201);
      expect(data).toEqual(null);

      await prisma.user.delete({ where: { email: userMock.email } });
    });
  });
});
