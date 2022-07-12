import { Prisma } from '@prisma/client';

export const userIdWalterWhite = '1f008731-4645-43de-8af9-3060d4086001';
export const userIdJessePinkman = '1f008731-4645-43de-8af9-3060d4086002';

const baseImageUrl = 'https://raw.githubusercontent.com/mkosir/prisma-next-graphql/main/misc/user-images';

export const users: Prisma.UserCreateInput[] = [
  {
    id: userIdWalterWhite,
    email: 'walter.white@mail.com',
    name: 'Walter White',
    username: 'Heisenberg',
    imageUrl: `${baseImageUrl}/heisenberg.jpg`,
    role: 'ADMINISTRATOR',
  },
  {
    id: userIdJessePinkman,
    email: 'jesse.pinkman@mail.com',
    name: 'Jesse Pinkman',
    username: 'Jesse',
    imageUrl: `${baseImageUrl}/jesse.jpg`,
    role: 'APPRENTICE',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086003',
    email: 'skyler.white@mail.com',
    name: 'Skyler White',
    username: 'Sky',
    imageUrl: `${baseImageUrl}/sky.jpg`,
    role: 'STANDARD',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086004',
    email: 'hank.schrader@mail.com',
    name: 'Hank Schrader',
    username: 'Hank',
    imageUrl: `${baseImageUrl}/hank.jpg`,
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
    imageUrl: `${baseImageUrl}/jimmy.jpg`,
    role: 'STANDARD',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086007',
    email: 'gustavo.fring@mail.com',
    name: 'Gustavo Fring',
    username: 'Gus',
    imageUrl: `${baseImageUrl}/gus.jpg`,
    role: 'STANDARD',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086008',
    email: 'michael.ehrmantraut@mail.com',
    name: 'Michael Ehrmantraut',
    username: 'Mike',
    imageUrl: `${baseImageUrl}/mike.jpg`,
    role: 'STANDARD',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086009',
    email: 'hector.salamanca@mail.com',
    name: 'Hector Salamanca',
    username: 'Tio',
    imageUrl: `${baseImageUrl}/tio.jpg`,
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
