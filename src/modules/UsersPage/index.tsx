import { ServerSidePropsUsers } from 'pages/users';

export const UsersPage = ({ users }: ServerSidePropsUsers) => {
  console.log('🔎 Log ~ users', users);

  return (
    <div>
      <h3>👤 Users</h3>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
