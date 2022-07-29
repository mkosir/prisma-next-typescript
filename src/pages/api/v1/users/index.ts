import type { NextApiRequest, NextApiResponse } from 'next';

import { create, CreateResponse } from 'controllers/users/create';
import { list, ListResponse } from 'controllers/users/list';

type UsersResponse = ListResponse | CreateResponse;

export default async function handler(req: NextApiRequest, res: NextApiResponse<UsersResponse>) {
  switch (req.method) {
    case 'GET':
      list(req, res);
      return;
    case 'POST':
      create(req, res);
      return;
    default:
      res.status(405).json({ message: `HTTP method ${req.method} not allowed` });
      return;
  }
}
