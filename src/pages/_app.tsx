import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'common/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Prisma/Next.js/TypeScript Boilerplate</title>
        <meta name="description" content="💊 Minimal GraphQL boilerplate with Prisma and Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
