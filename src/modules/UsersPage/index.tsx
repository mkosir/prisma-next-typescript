import { ServerSidePropsUsers } from 'pages/users';

export const UsersPage = ({ users }: ServerSidePropsUsers) => {
  console.log('🔎 Log ~ users', users);

  return <div>Users</div>;
};
