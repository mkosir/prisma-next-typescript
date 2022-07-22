import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data | null>) {
  switch (req.method) {
    case 'POST':
      console.log('🔎 Log ~ handler ~ req.body', req.body.email);
      res.status(201).json(null);
      return;

    default:
      res.status(405).json({ message: `HTTP method ${req.method} not allowed` });
      return;
  }
}
