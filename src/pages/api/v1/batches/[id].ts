import type { NextApiRequest, NextApiResponse } from 'next';

import { destroy, DestroyResponse } from 'controllers/batches/destroy';
import { show, ShowResponse } from 'controllers/batches/show';

type BatchesResponse = ShowResponse | DestroyResponse;

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface NextApiRequestExtended extends NextApiRequest {
  query: { id: string };
}

export default async function handler(req: NextApiRequestExtended, res: NextApiResponse<BatchesResponse>) {
  switch (req.method) {
    case 'GET':
      return show(req, res);
    case 'DELETE':
      return destroy(req, res);
    default:
      return res.status(405).json({ message: `HTTP method ${req.method ?? 'unknown'} not allowed` });
  }
}
