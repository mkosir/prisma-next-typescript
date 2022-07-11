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
      <div style={{ textAlign: 'center', margin: '15px 0 40px' }}>
        <img src="/heisenberg.png" alt="heisenberg" width={85} />
        <div style={{ fontSize: '22px', fontWeight: 'bold' }}>
          Minimal GraphQL boilerplate with Prisma, Next.js and TypeScript{' '}
        </div>
      </div>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
