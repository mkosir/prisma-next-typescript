import { Prisma } from '@prisma/client';

import { ServerSidePropsBatches } from 'pages/batches';

type Batches = ServerSidePropsBatches['batches'];
type Batch = Batches[number];

export type BatchRowProps = {
  batch: Batch;
};

export const BatchRow = ({ batch }: BatchRowProps) => {
  return (
    <div>
      {batch.title} | {batch.description} | {new Prisma.Decimal(batch.purity).toNumber()}% |
      {new Prisma.Decimal(batch.weight).toNumber()}kg
    </div>
  );
};
