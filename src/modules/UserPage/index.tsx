import { Prisma } from '@prisma/client';

import { Table } from 'common/components/Table';
import { ServerSidePropsUser } from 'pages/users/[id]';

export const UserPage = ({ userId, user }: ServerSidePropsUser) => {
  if (user === null) {
    return (
      <div>
        User with id <span style={{ fontStyle: 'italic', color: 'gray' }}>{userId}</span> does not exist.
      </div>
    );
  }

  return (
    <div>
      <h3>👤 User - {user.name}</h3>
      <Table
        trHead={Object.keys(Prisma.UserScalarFieldEnum).map((columnName) => (
          <th key={columnName}>{columnName}</th>
        ))}
        trData={[
          <>
            <td>{user.id}</td>
            <td>{new Date(user.createdAt).toDateString()}</td>
            <td>{new Date(user.updatedAt).toDateString()}</td>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: '170px' }}>
              {user.imageUrl}
            </td>
            <td>{user.role}</td>
          </>,
        ]}
      />
      Batches Cooked
      {/* <table style={{ textAlign: 'left', borderCollapse: 'collapse', width: '100%' }}>
        <tbody>
          <tr>
            {Object.keys(Prisma.BatchScalarFieldEnum).map((columnName) => (
              <th key={columnName}>{columnName}</th>
            ))}
          </tr>
          <tr>
            <td>{user.batches.}</td>
            <td>{user.createdAt.toString()}</td>
            <td>{user.updatedAt.toString()}</td>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.imageUrl}</td>
            <td>{user.role}</td>
            <td>{.toString()}</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};
