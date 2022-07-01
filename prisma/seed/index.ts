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
    name: 'Walter White',
    username: 'Heisenberg',
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
  // await prisma.user.createMany<{ data: User[] }>({
  //   data: {
  //     //
  //     // id: 'dd1',
  //     // createdAt: new Date(),
  //     // updatedAt: new Date(),
  //     // imageUrl: '',
  //     //
  //     email: 'walter.white@admin.com',
  //     name: 'Walter White',
  //     username: 'Heisenberg',
  //     role: 'ADMINISTRATOR',
  //   },
  // });

  await prisma.user.createMany<{ data: User[] }>({
    data: [
      {
        //
        id: '8f008731-4645-43de-8af9-3060d4086df1',
        createdAt: new Date(),
        updatedAt: new Date(),
        imageUrl: '',
        //
        email: 'walter.white2@admin.com',
        name: 'Walter White',
        username: 'Heisenberg',
        role: 'ADMINISTRATOR',
      },
    ],
  });

  await prisma.user.createMany({
    data: [
      {
        //
        // id: 'dd1',
        createdAt: new Date(),
        updatedAt: new Date(),
        imageUrl: '',
        //
        email: 'walter.white2@admin.com',
        name: 'Walter White',
        username: 'Heisenberg',
        role: 'ADMINISTRATOR',
      },
    ],
  });

  await prisma.user.createMany<{ data: User[] }>({ data: users });

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
