import { ServerSidePropsUsers } from 'pages/users';

export const UsersPage = ({ users }: ServerSidePropsUsers) => {
  console.log('🔎 Log ~ users', users);

  return (
    <div>
      <h3>👤 Users</h3>
      {users.map((user) => (
        <div key={user.id}>
          {user.name} | {user.username} | {user.role} |{' '}
          <ul>
            <li>Cooked {user.batches.length} batches</li>
            {/* <li>Best purity {Math.max(user.batches.map((batch) => batch.purity as unknown as number))}</li> */}
            {/* <li>Average purity {user.batches.map()}</li> */}
          </ul>
        </div>
      ))}
    </div>
  );
};
