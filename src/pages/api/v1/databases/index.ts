import type { NextApiRequest, NextApiResponse } from 'next';

import { seed, SeedResponse } from 'controllers/databases/seed';

type DatabasesResponse = SeedResponse;

export default async function handler(req: NextApiRequest, res: NextApiResponse<DatabasesResponse>) {
  switch (req.method) {
    case 'POST':
      return seed(req, res);
    default:
      return res.status(405).json({ message: `HTTP method ${req.method ?? 'unknown'} not allowed` });
  }
}
