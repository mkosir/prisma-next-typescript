import { Prisma } from '@prisma/client';

export const userWalterWhiteId = '1f008731-4645-43de-8af9-3060d4086001';
export const userJessePinkmanId = '1f008731-4645-43de-8af9-3060d4086002';

export const users: Prisma.UserCreateInput[] = [
  {
    id: userWalterWhiteId,
    email: 'walter.white@mail.com',
    name: 'Walter White',
    username: 'Heisenberg',
    role: 'ADMINISTRATOR',
  },
  {
    id: userJessePinkmanId,
    email: 'jesse.pinkman@mail.com',
    name: 'Jesse Pinkman',
    username: 'Jesse',
    role: 'APPRENTICE',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086003',
    email: 'skyler.white@mail.com',
    name: 'Skyler White',
    username: 'Sky',
    role: 'STANDARD',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086004',
    email: 'hank.schrader@mail.com',
    name: 'Hank Schrader',
    username: 'Hank',
    role: 'STANDARD',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086005',
    email: 'marie.schrader@mail.com',
    name: 'Marie Schrader',
    username: 'Marie',
    role: 'STANDARD',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086006',
    email: 'saul.goodman@mail.com',
    name: 'Saul Goodman',
    username: 'Jimmy',
    role: 'STANDARD',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086007',
    email: 'gustavo.fring@mail.com',
    name: 'Gustavo Fring',
    username: 'Gus',
    role: 'STANDARD',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086008',
    email: 'michael.ehrmantraut@mail.com',
    name: 'Michael Ehrmantraut',
    username: 'Mike',
    role: 'STANDARD',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086009',
    email: 'hector.salamanca@mail.com',
    name: 'Hector Salamanca',
    username: 'Tio',
    role: 'STANDARD',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086010',
    email: 'alberto.salamanca@mail.com',
    name: 'Alberto Salamanca',
    username: 'Tuco',
    role: 'STANDARD',
  },
];
