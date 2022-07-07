import type { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import prisma from '../prisma/prismaClient';
import styles from '../styles/Home.module.css';

const Home = ({ users }: ServerSideProps) => {
  console.log('🔎 Log ~ users', users);

  return (
    <div className={styles.container}>
      <Head>
        <title>Prisma/Next.js/TypeScript Boilerplate</title>
        <meta name="description" content="💊 Minimal GraphQL boilerplate with Prisma and Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;

type ServerSideProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps = async () => {
  const users = await prisma.user.findMany({
    include: {
      batches: true,
    },
  });

  return {
    props: { users: JSON.parse(JSON.stringify(users)) as typeof users },
  };
};
