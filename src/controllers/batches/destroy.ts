import type { NextApiResponse } from 'next';

import { ResponseError } from 'common/types/apiV1';
import { NextApiRequestExtended } from 'pages/api/v1/batches/[id]';
import prisma from 'prisma/prismaClient';

export type DestroyResponse = null | ResponseError;

export const destroy = async (req: NextApiRequestExtended, res: NextApiResponse<DestroyResponse>) => {
  const queryParamId = req.query.id;

  try {
    await prisma.batch.delete({
      where: { id: queryParamId },
    });

    res.status(200).json(null);
    return;
  } catch (err) {
    res.status(400).json({ message: 'An error occurred while deleting the batch' });
    return;
  }
};
