import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import { ResponseError } from 'common/types/apiV1';
import prisma from 'prisma/prismaClient';

export type CreateResponse = null | ResponseError;

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface NextApiRequestWithBody extends NextApiRequest {
  body: Prisma.UserCreateInput;
}

export const create = async (req: NextApiRequestWithBody, res: NextApiResponse<CreateResponse>) => {
  try {
    await prisma.user.create({
      data: req.body,
    });

    res.status(201).json(null);
    return;
  } catch (err) {
    res.status(400).json({ message: 'An error occurred while creating the user' });
    return;
  }
};
