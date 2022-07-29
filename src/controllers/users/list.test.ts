import { Prisma, User } from '@prisma/client';

import { pathsApiV1 } from 'common/consts/pathsApi';
import { client } from 'common/test/client';
import prisma from 'prisma/prismaClient';

describe.only('Controllers', () => {
  describe('Users - List', () => {
    const usersMock: Array<Prisma.UserCreateInput> = [
      {
        email: 'users_list_1@test.com',
        username: 'users_list_1',
        name: 'users_list_1',
      },
      {
        email: 'users_list_2@test.com',
        username: 'users_list_2',
        name: 'users_list_2',
      },
    ];

    beforeAll(async () => {
      await prisma.user.createMany({ data: usersMock });
    });

    afterAll(async () => {
      const deleteUsersMock = prisma.user.deleteMany({ where: { email: { startsWith: 'users_list_' } } });

      await prisma.$transaction([deleteUsersMock]);

      await prisma.$disconnect();
    });

    it('should list users when endpoint is called', async () => {
      const { status, data } = await client.get<ReadonlyArray<User>>(pathsApiV1.USERS);

      expect(status).toEqual(200);
      expect(data.some((user) => user.email === usersMock[0].email)).toBeTruthy();
      expect(data.length).toBeGreaterThanOrEqual(usersMock.length);
    });
  });
});
