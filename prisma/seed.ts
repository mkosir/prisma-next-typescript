import { PrismaClient, User } from '@prisma/client';

// const users: User[] = [
const users = [
  {
    email: 'walter.white@admin.com',
    username: 'Heisenberg',
    name: 'Walter White',
    role: 'ADMINISTRATOR',
  },
];

const batches = [
  {
    email: 'walter.white@admin.com',
    username: 'Heisenberg',
    name: 'Walter White',
    role: 'ADMINISTRATOR',
  },
];

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: users,
  });

  // await prisma.batch.createMany({
  //   data: batches,
  // });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
