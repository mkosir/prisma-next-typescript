import { PrismaClient, User } from '@prisma/client';

const users: User[] = [
  {
    //
    id: 'dd',
    createdAt: new Date(),
    updatedAt: new Date(),
    imageUrl: '',
    //
    email: 'walter.white@admin.com',
    username: 'Heisenberg',
    name: 'Walter White',
    role: 'ADMINISTRATOR',
  },
];

const batches = [
  {
    title: 'Blue Sky',
    description: 'summer batch',
    purity: 99.1,
  },
];

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({ data: users });

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
