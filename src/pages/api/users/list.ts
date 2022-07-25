import { User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from 'prisma/prismaClient';

export type ListResponse =
  | {
      message: string;
    }
  | ReadonlyArray<User>;

export const list = async (req: NextApiRequest, res: NextApiResponse<ListResponse>) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json(users);
    return;
  } catch (err) {
    res.status(400).json({ message: 'An error occurred while retrieving the users' });
    return;
  }
};
