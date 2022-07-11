import { ServerSidePropsUsers } from 'pages/users';

import { UserRow } from './components';

export const UsersPage = ({ users }: ServerSidePropsUsers) => {
  return (
    <div>
      <h3>👤 Users</h3>
      {users.map((user) => (
        <UserRow key={user.id} user={user} />
      ))}
    </div>
  );
};
