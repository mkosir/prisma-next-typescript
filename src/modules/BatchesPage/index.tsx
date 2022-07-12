import { Prisma } from '@prisma/client';

import { Table } from 'common/components';
import { ServerSidePropsBatches } from 'pages/batches';

export const BatchesPage = ({ batches }: ServerSidePropsBatches) => {
  return (
    <>
      <h3>💊 Batches</h3>
      <div style={{ paddingBottom: '10px', fontStyle: 'italic' }}>Total No. of batches: {batches.length}</div>
      <Table
        trHead={Object.keys(Prisma.BatchScalarFieldEnum).map((columnName) => {
          let unit = '';
          switch (columnName as Prisma.BatchScalarFieldEnum) {
            case 'purity':
              unit = '[%]';
              break;
            case 'weight':
              unit = '[kg]';
              break;
          }
          return (
            <th key={columnName}>
              {columnName}
              {unit}
            </th>
          );
        })}
        trData={batches.map((batch) => (
          <>
            <td>{batch.id}</td>
            <td>{new Date(batch.createdAt).toDateString()}</td>
            <td>{new Date(batch.updatedAt).toDateString()}</td>
            <td>{batch.title}</td>
            <td>{batch.description ?? '-'}</td>
            <td>{new Prisma.Decimal(batch.purity).toNumber()}</td>
            <td>{new Prisma.Decimal(batch.weight).toNumber()}</td>
            <td>{batch.supplierId}</td>
          </>
        ))}
      />
    </>
  );
};
