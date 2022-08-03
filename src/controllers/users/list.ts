import { User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import { ResponseError } from 'common/types/apiV1';
import prisma from 'prisma/prismaClient';

export type ListResponse = ReadonlyArray<User> | ResponseError;

export const list = async (_req: NextApiRequest, res: NextApiResponse<ListResponse>) => {
  try {
    const users = await prisma.user.findMany();

    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json({ message: 'An error occurred while retrieving the users' });
  }
};
