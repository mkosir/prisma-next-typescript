import { Prisma } from '@prisma/client';
import { userJessePinkmanId, userWalterWhiteId } from './users';

export const batches: Prisma.BatchCreateInput[] = [
  {
    id: '2f008731-4645-43de-8af9-3060d4086001',
    title: 'Blue Sky',
    description: 'summer batch',
    purity: 99.1,
    weight: 145.64,
    users: { connect: [{ id: userWalterWhiteId }, { id: userJessePinkmanId }] },
  },
  {
    id: '2f008731-4645-43de-8af9-3060d4086002',
    title: 'Blue Sky',
    description: 'bad batch',
    purity: 45.7,
    weight: 142.18,
    users: { connect: [{ id: userWalterWhiteId }, { id: userJessePinkmanId }] },
  },
  {
    id: '2f008731-4645-43de-8af9-3060d4086003',
    title: 'Blue Sky',
    purity: 99.4,
    weight: 149.73,
    users: { connect: { id: userJessePinkmanId } },
  },
  {
    id: '2f008731-4645-43de-8af9-3060d4086004',
    title: 'Blue Sky',
    purity: 98.6,
    weight: 146.51,
    users: { connect: { id: userWalterWhiteId } },
  },
];
