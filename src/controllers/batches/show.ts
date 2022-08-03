import { Batch } from '@prisma/client';
import type { NextApiResponse } from 'next';

import { ResponseError } from 'common/types/apiV1';
import { NextApiRequestExtended } from 'pages/api/v1/batches/[id]';
import prisma from 'prisma/prismaClient';

export type ShowResponse = Batch | ResponseError;

export const show = async (req: NextApiRequestExtended, res: NextApiResponse<ShowResponse>) => {
  try {
    const queryParamId = req.query.id;

    const batch = await prisma.batch.findUnique({
      where: { id: queryParamId },
    });

    if (batch === null) {
      return res.status(404).json({ message: `Batch id:'${queryParamId}' can't be found` });
    }

    return res.status(200).json(batch);
  } catch (err) {
    return res.status(400).json({ message: 'An error occurred while retrieving the batch' });
  }
};
