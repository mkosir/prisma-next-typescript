import { ServerSidePropsBatches } from 'pages/batches';

type Batches = ServerSidePropsBatches['batches'];
type Batch = Batches[number];

export type BatchRowProps = {
  batch: Batch;
};

export const BatchRow = ({ batch }: BatchRowProps) => {
  return (
    <div>
      {batch.title} | {batch.description} | {batch.purity.toNumber()} | {batch.weight.toNumber()}
    </div>
  );
};
