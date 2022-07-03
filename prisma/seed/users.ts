import { Prisma } from '@prisma/client';

export const users: Prisma.UserCreateInput[] = [
  {
    id: '8f008731-4645-43de-8af9-3060d4086001',
    email: 'walter.white@mail.com',
    name: 'Walter White',
    username: 'Heisenberg',
    role: 'ADMINISTRATOR',
  },
  {
    id: '8f008731-4645-43de-8af9-3060d4086002',
    email: 'jesse.pinkman@mail.com',
    name: 'Jesse Pinkman',
    username: 'Jesse',
    role: 'APPRENTICE',
  },
  {
    id: '8f008731-4645-43de-8af9-3060d4086003',
    email: 'skyler.white@mail.com',
    name: 'Skyler White',
    username: 'Sky',
    role: 'STANDARD',
  },
];
