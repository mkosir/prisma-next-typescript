import type { InferGetServerSidePropsType } from 'next';

import { BatchesPage } from 'modules/BatchesPage';

import prisma from '../../prisma/prismaClient';

export type ServerSidePropsBatches = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps = async () => {
  const batches = await prisma.batch.findMany();

  return {
    props: { batches: JSON.parse(JSON.stringify(batches)) as typeof batches },
  };
};

const Batches = ({ batches }: ServerSidePropsBatches) => <BatchesPage batches={batches} />;

export default Batches;
