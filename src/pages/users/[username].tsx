import type { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';

import { UserPage } from 'modules';
import prisma from 'prisma/prismaClient';

export type ServerSidePropsUser = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps = async (context: GetServerSidePropsContext<{ username: string }>) => {
  const queryParamUsername = context.params?.username;

  const user = await prisma.user.findFirst({
    where: { username: queryParamUsername },
    include: {
      batches: true,
    },
  });

  return {
    props: { queryParamUsername, user: JSON.parse(JSON.stringify(user)) as typeof user },
  };
};

const User = ({ queryParamUsername, user }: ServerSidePropsUser) => (
  <UserPage queryParamUsername={queryParamUsername} user={user} />
);

export default User;
