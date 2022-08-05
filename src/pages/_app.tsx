import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { useEffect, useState } from 'react';

import { Breadcrumbs, Progress } from 'common/components';

import 'common/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    const routeEventStart = () => {
      setIsPageLoading(true);
    };
    const routeEventEnd = () => {
      setIsPageLoading(false);
    };

    Router.events.on('routeChangeStart', routeEventStart);
    Router.events.on('routeChangeComplete', routeEventEnd);
    Router.events.on('routeChangeError', routeEventEnd);
    return () => {
      Router.events.off('routeChangeStart', routeEventStart);
      Router.events.off('routeChangeComplete', routeEventEnd);
      Router.events.off('routeChangeError', routeEventEnd);
    };
  }, []);

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
      <Breadcrumbs />
      {isPageLoading ? <Progress /> : <Component {...pageProps} />}
    </>
  );
};

export default App;
