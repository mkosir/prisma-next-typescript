import { ServerSidePropsUsers } from 'pages/users';

import { UserRow } from './components';

export const UsersPage = ({ users }: ServerSidePropsUsers) => {
  return (
    <div>
      <h3>👤 Users</h3>
      <div style={{ paddingBottom: '10px', fontStyle: 'italic' }}>Total No. of users: {users.length}</div>
      {users.map((user) => (
        <UserRow key={user.id} user={user} />
      ))}
    </div>
  );
};
