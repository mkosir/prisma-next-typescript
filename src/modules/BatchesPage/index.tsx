import { ServerSidePropsBatches } from 'pages/batches';

export const BatchesPage = ({ batches }: ServerSidePropsBatches) => {
  console.log('🔎 Log ~ batches', batches);

  return <div>Batches</div>;
};
