import type { InferGetServerSidePropsType } from 'next';

import { HomePage } from 'modules/HomePage';

import prisma from '../../prisma/prismaClient';

export type ServerSidePropsHome = InferGetServerSidePropsType<typeof getServerSideProps>;

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

const Home = ({ users }: ServerSidePropsHome) => <HomePage users={users} />;

export default Home;
