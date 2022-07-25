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
      const user = await prisma.user.findUnique({
        where: { username: users[0].username },
      });

      expect(user?.email).toEqual(users[0].email);
      expect(user?.role).toEqual(users[0].role);
    });

    // it('should show user not found when invalid username is provided', async () => {
    //   const user = await prisma.user.findUnique({
    //     where: { username: 'not_existing_username' },
    //   });

    //   expect(user).toEqual(users[0]);
    // });

    // it('should show user error when invalid query params is passed', async () => {
    //   const user = await prisma.user.findUnique({
    //     where: { username: 'not_existing_username' },
    //   });

    //   expect(user).toEqual(users[0]);
    // });
  });
});
