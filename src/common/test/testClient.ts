// import { createServer, RequestListener } from 'http';

// import { NextApiRequest, NextApiResponse } from 'next';
// import { apiResolver } from 'next/dist/server/api-utils/node';

// type NextApiHandler<T extends NextApiRequest, U = unknown> = (
//   req: T,
//   res: NextApiResponse<U>,
// ) => unknown | Promise<unknown>;

export const testClient = async <T>(request: RequestInfo): Promise<Response & { data: T }> => {
  const baseUrl = 'http://localhost:3000'; //process.env.NEXT_PUBLIC_BASE_URL

  const response = await fetch(`${baseUrl}${request}`);
  const data: T = await response.json();

  //@ts-ignore - destructing native fetch response
  return { ...response[Object.getOwnPropertySymbols(response)[1]], data };
};
// export const testClient = <T extends NextApiRequest, U>(handler: NextApiHandler<T, U>) => {
//   const listener: RequestListener = (req, res) => {
//     return apiResolver(
//       req,
//       res,
//       undefined,
//       handler,
//       {
//         previewModeEncryptionKey: '',
//         previewModeId: '',
//         previewModeSigningKey: '',
//       },
//       false,
//     );
//   };

//   return request(createServer(listener));
// };
