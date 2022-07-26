import { createServer, RequestListener } from 'http';

import { NextApiRequest, NextApiResponse } from 'next';
import { apiResolver } from 'next/dist/server/api-utils/node';
import { agent as request } from 'supertest';

type NextApiHandler<T extends NextApiRequest, U = unknown> = (
  req: T,
  res: NextApiResponse<U>,
) => unknown | Promise<unknown>;

export const testClient = <T extends NextApiRequest, U>(handler: NextApiHandler<T, U>) => {
  const listener: RequestListener = (req, res) => {
    return apiResolver(
      req,
      res,
      { username: 'Heisenberg' },
      handler,
      {
        previewModeEncryptionKey: '',
        previewModeId: '',
        previewModeSigningKey: '',
      },
      false,
    );
  };

  return request(createServer(listener));
};
