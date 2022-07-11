import { ServerSidePropsBatches } from 'pages/batches';

export const BatchesPage = ({ batches }: ServerSidePropsBatches) => {
  console.log('🔎 Log ~ batches', batches);

  return (
    <div>
      <h3>💊 Batches</h3>
      {batches.map((batch) => (
        <div key={batch.id}>{batch.title}</div>
      ))}
    </div>
  );
};
