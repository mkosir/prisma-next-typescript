import type { NextApiRequest, NextApiResponse } from 'next';

import { create, CreateResponse } from '../../../controllers/users/create';
import { destroy, DestroyResponse } from '../../../controllers/users/destroy';
import { list, ListResponse } from '../../../controllers/users/list';
import { ShowResponse } from '../../../controllers/users/show';

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
      destroy(req, res);
      return;
    default:
      res.status(405).json({ message: `HTTP method ${req.method} not allowed` });
      return;
  }
}
