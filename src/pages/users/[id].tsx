import type { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';

import { UserPage } from 'modules/UserPage';
import prisma from 'prisma/prismaClient';

export type ServerSidePropsUser = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps = async (context: GetServerSidePropsContext<{ id: string }>) => {
  const userId = context.params?.id;

  const user = await prisma.user.findFirst({
    where: { id: userId },
    include: {
      batches: true,
    },
  });

  return {
    props: { userId, user: JSON.parse(JSON.stringify(user)) as typeof user },
  };
};

const User = ({ userId, user }: ServerSidePropsUser) => <UserPage userId={userId} user={user} />;

export default User;
