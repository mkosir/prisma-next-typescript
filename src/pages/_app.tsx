import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Breadcrumbs, Progress } from 'common/components';
import { usePageLoading } from 'common/utils/usePageLoading';

import 'common/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  const { isPageLoading } = usePageLoading();

  return (
    <>
      <Head>
        <title>Prisma / Next.js / TypeScript Boilerplate</title>
        <meta name="description" content="💊 Minimal RESTful API boilerplate with Prisma, Next.js and TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ textAlign: 'center', margin: '15px 0 30px' }}>
        <img src="/heisenberg.png" alt="heisenberg" width={85} />
        <div style={{ fontSize: '22px', fontWeight: 'bold' }}>Minimal boilerplate - Prisma / Next.js / TypeScript</div>
      </div>
      <div style={{ display: 'flex' }}>
        <Breadcrumbs />
        {isPageLoading && <Progress size="lg" style={{ marginLeft: '7px' }} />}
      </div>
      {!isPageLoading && <Component {...pageProps} />}
    </>
  );
};

export default App;
