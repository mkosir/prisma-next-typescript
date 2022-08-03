import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import { ResponseError } from 'common/types/apiV1';
import prisma from 'prisma/prismaClient';
import { batches } from 'prisma/seed/batches';
import { suppliers } from 'prisma/seed/suppliers';
import { users } from 'prisma/seed/users';

export type SeedResponse = null | ResponseError;

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface NextApiRequestExtended extends NextApiRequest {
  body: Prisma.UserCreateInput;
}

export const seed = async (_req: NextApiRequestExtended, res: NextApiResponse<SeedResponse>) => {
  try {
    await prisma.user.createMany({ data: users, skipDuplicates: true });
    await prisma.supplier.createMany({ data: suppliers, skipDuplicates: true });

    for (const batch of batches) {
      await prisma.batch.create({ data: batch });
    }

    return res.status(201).json(null);
  } catch (err) {
    return res.status(400).json({ message: 'An error occurred while creating the user' });
  }
};
