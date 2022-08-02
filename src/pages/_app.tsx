import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'common/styles/globals.css';
import { Breadcrumbs } from 'common/components';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Prisma / Next.js / TypeScript Boilerplate</title>
        <meta name="description" content="💊 Minimal RESTful API boilerplate with Prisma, Next.js and TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ textAlign: 'center', margin: '15px 0 40px' }}>
        <img src="/heisenberg.png" alt="heisenberg" width={85} />
        <div style={{ fontSize: '22px', fontWeight: 'bold' }}>Minimal boilerplate - Prisma / Next.js / TypeScript</div>
      </div>
      <Breadcrumbs />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
