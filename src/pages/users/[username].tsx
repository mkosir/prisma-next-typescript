import type { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';

import { UserPage } from 'modules';
import prisma from 'prisma/prismaClient';

export type ServerSidePropsUser = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps = async (context: GetServerSidePropsContext<{ username: string }>) => {
  const urlParamUsername = context.params?.username;

  const user = await prisma.user.findFirst({
    where: { username: urlParamUsername },
    include: {
      batches: true,
    },
  });

  return {
    props: { urlParamUsername, user: JSON.parse(JSON.stringify(user)) as typeof user },
  };
};

const User = ({ urlParamUsername, user }: ServerSidePropsUser) => (
  <UserPage urlParamUsername={urlParamUsername} user={user} />
);

export default User;
