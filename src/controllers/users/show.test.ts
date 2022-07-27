import { User } from '@prisma/client';

import { pathsApiV1 } from 'common/consts/pathsApi';
import { testClient } from 'common/test/testClient';
import { ResponseError } from 'common/types/apiV1';
import prisma from 'prisma/prismaClient';
import { users } from 'prisma/seed/users';

describe('Controllers', () => {
  describe('Users - Show', () => {
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

    it('should show a new user when valid username is provided', async () => {
      const { status, data } = await testClient<User>(pathsApiV1.USERS_DETAILS('Heisenberg'));

      expect(status).toEqual(200);
      expect(data.email).toEqual(users[0].email);
      expect(data.role).toEqual(users[0].role);
    });

    it('should show user not found when invalid username is provided', async () => {
      const userName = 'not_existing_username';
      const { status, data } = await testClient<ResponseError>(pathsApiV1.USERS_DETAILS(userName));

      expect(status).toEqual(404);
      expect(data).toEqual<ResponseError>({ message: `Username '${userName}' can't be found` });
    });
  });
});
