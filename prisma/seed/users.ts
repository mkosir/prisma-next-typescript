import { Prisma } from '@prisma/client';

export const users: Prisma.UserCreateInput[] = [
  {
    id: '8f008731-4645-43de-8af9-3060d4086001',
    email: 'walter.white@admin.com',
    name: 'Walter White',
    username: 'Heisenberg',
    role: 'ADMINISTRATOR',
  },
];
