import type { InferGetServerSidePropsType } from 'next';

import { UsersPage } from 'modules/UsersPage';
import prisma from 'prisma/prismaClient';

export type ServerSidePropsUsers = InferGetServerSidePropsType<typeof getServerSideProps>;

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

const Users = ({ users }: ServerSidePropsUsers) => <UsersPage users={users} />;

export default Users;
