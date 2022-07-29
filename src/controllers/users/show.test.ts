import { Prisma, User } from '@prisma/client';

import { pathsApiV1 } from 'common/consts/pathsApi';
import { client } from 'common/test/client';
import { ResponseError } from 'common/types/apiV1';
import prisma from 'prisma/prismaClient';

describe('Controllers', () => {
  describe('Users - Show', () => {
    const userMock: Prisma.UserCreateInput = {
      email: 'users_show@test.com',
      username: 'users_show',
      name: 'users_show',
    };

    beforeAll(async () => {
      await prisma.user.create({
        data: userMock,
      });
    });

    afterAll(async () => {
      const deleteUserMock = prisma.user.delete({ where: { email: userMock.email } });

      await prisma.$transaction([deleteUserMock]);

      await prisma.$disconnect();
    });

    it('should show a new user when valid username is provided', async () => {
      const { status, data } = await client.get<User>(pathsApiV1.USERS_DETAILS(userMock.username));

      expect(status).toEqual(200);
      expect(data.email).toEqual(userMock.email);
    });

    it('should show user not found when invalid username is provided', async () => {
      const userName = 'not_existing_username';
      const { status, data } = await client.get<ResponseError>(pathsApiV1.USERS_DETAILS(userName));

      expect(status).toEqual(404);
      expect(data).toEqual<ResponseError>({ message: `Username '${userName}' can't be found` });
    });
  });
});
