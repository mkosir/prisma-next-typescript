import { User } from '@prisma/client';

import { pathsApiV1 } from 'common/consts/pathsApi';
import { testClient } from 'common/test/testClient';
import prisma from 'prisma/prismaClient';
import { users } from 'prisma/seed/users';

describe('Controllers', () => {
  describe('Users - List', () => {
    beforeAll(async () => {
      await prisma.user.createMany({
        data: users,
      });
    });

    afterAll(async () => {
      const deleteUsers = prisma.user.deleteMany();

      await prisma.$transaction([deleteUsers]);

      await prisma.$disconnect();
    });

    it('should list users when endpoint is called', async () => {
      const { status, data } = await testClient<ReadonlyArray<User>>(pathsApiV1.USERS);

      expect(status).toEqual(200);
      expect(data[0].email).toEqual(users[0].email);
      expect(data[0].role).toEqual(users[0].role);
      expect(data).toHaveLength(users.length);
    });
  });
});
