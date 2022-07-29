import { Prisma, User } from '@prisma/client';

import { pathsApiV1 } from 'common/consts/pathsApiV1';
import { client } from 'common/utils/client';
import prisma from 'prisma/prismaClient';

describe.only('Controllers', () => {
  describe('Users - List', () => {
    const usersMock: Array<Prisma.UserCreateInput> = [
      {
        email: 'users_list-1@test.com',
        username: 'users_list-1',
        name: 'users_list-1',
      },
      {
        email: 'users_list-2@test.com',
        username: 'users_list-2',
        name: 'users_list-2',
      },
    ];

    beforeAll(async () => {
      await prisma.user.createMany({ data: usersMock });
    });

    afterAll(async () => {
      const deleteUsersMock = prisma.user.deleteMany({ where: { email: { startsWith: 'users_list' } } });

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
