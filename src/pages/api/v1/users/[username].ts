import type { NextApiRequest, NextApiResponse } from 'next';

import { destroy, DestroyResponse } from '../../../../controllers/users/destroy';
import { show, ShowResponse } from '../../../../controllers/users/show';

type UsersResponse = ShowResponse | DestroyResponse;

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface NextApiRequestExtended extends NextApiRequest {
  query: { username: string };
}

export default async function handler(req: NextApiRequestExtended, res: NextApiResponse<UsersResponse>) {
  switch (req.method) {
    case 'GET':
      show(req, res);
      return;
    case 'DELETE':
      destroy(req, res);
      return;
    default:
      res.status(405).json({ message: `HTTP method ${req.method} not allowed` });
      return;
  }
}
