import { User } from '@prisma/client';
import type { NextApiResponse } from 'next';

import { ResponseError } from 'common/types/apiV1';
import { NextApiRequestExtended } from 'pages/api/v1/users/[username]';
import prisma from 'prisma/prismaClient';

export type ShowResponse = User | ResponseError;

export const show = async (req: NextApiRequestExtended, res: NextApiResponse<ShowResponse>) => {
  try {
    const queryParamUsername = req.query.username;

    const user = await prisma.user.findUnique({
      where: { username: queryParamUsername },
    });

    if (user === null) {
      res.status(404).json({ message: `Username '${queryParamUsername}' can't be found` });
      return;
    }

    res.status(200).json(user);
    return;
  } catch (err) {
    res.status(400).json({ message: 'An error occurred while retrieving the user' });
    return;
  }
};
