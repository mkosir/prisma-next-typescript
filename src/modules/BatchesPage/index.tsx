import { ServerSidePropsBatches } from 'pages/batches';

import { BatchRow } from './components';

export const BatchesPage = ({ batches }: ServerSidePropsBatches) => {
  return (
    <div>
      <h3>💊 Batches</h3>
      <div style={{ paddingBottom: '10px', fontStyle: 'italic' }}>Total No. of batches: {batches.length}</div>
      {batches.map((batch) => (
        <BatchRow key={batch.id} batch={batch} />
      ))}
    </div>
  );
};
