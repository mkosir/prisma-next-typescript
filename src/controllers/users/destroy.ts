import type { NextApiResponse } from 'next';

import { ResponseError } from 'common/types/apiV1';
import { NextApiRequestExtended } from 'pages/api/v1/users/[username]';
import prisma from 'prisma/prismaClient';

export type DestroyResponse = null | ResponseError;

export const destroy = async (req: NextApiRequestExtended, res: NextApiResponse<DestroyResponse>) => {
  const urlParamUsername = req.query.username;

  try {
    await prisma.user.delete({
      where: { username: urlParamUsername },
    });

    res.status(200).json(null);
    return;
  } catch (err) {
    res.status(400).json({ message: 'An error occurred while deleting the user' });
    return;
  }
};
