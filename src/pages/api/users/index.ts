import type { NextApiRequest, NextApiResponse } from 'next';

import { create, CreateResponse } from './create';
import { destroy, DestroyResponse } from './destroy';
import { list, ListResponse } from './list';
import { ShowResponse } from './show';

type UsersResponse = CreateResponse | DestroyResponse | ShowResponse | ListResponse;

export default async function handler(req: NextApiRequest, res: NextApiResponse<UsersResponse>) {
  switch (req.method) {
    case 'GET':
      // show(req, res);
      list(req, res);
      return;
    case 'POST':
      create(req, res);
      return;
    case 'DELETE':
      return destroy(req, res);
    default:
      res.status(405).json({ message: `HTTP method ${req.method} not allowed` });
      return;
  }
}
