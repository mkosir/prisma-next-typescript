import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from 'prisma/prismaClient';

type Data = {
  message: string;
};

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface NextApiRequestWithBody extends NextApiRequest {
  body: Prisma.UserCreateInput;
}

export default async function handler(req: NextApiRequestWithBody, res: NextApiResponse<Data | null>) {
  switch (req.method) {
    case 'POST':
      try {
        await prisma.user.create({
          data: req.body,
        });
      } catch (err) {
        res.status(400).json({ message: 'An error occurred while creating the user' });
        return;
      }

      res.status(201).json(null);
      return;

    default:
      res.status(405).json({ message: `HTTP method ${req.method} not allowed` });
      return;
  }
}
