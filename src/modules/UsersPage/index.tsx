import { Link } from 'common/components';
import { ServerSidePropsUsers } from 'pages/users';

import { UserCard } from './components/UserCard';

export const UsersPage = ({ users }: ServerSidePropsUsers) => {
  return (
    <>
      <h3>👤 Users</h3>
      <Link href={'/users/add/test'} isUnstyled>
        <button
          style={{
            fontSize: '14px',
            backgroundColor: '#3d9cc23b',
            padding: '3px 10px',
            borderRadius: '5px',
          }}
        >
          Add +
        </button>
      </Link>
      <div style={{ paddingBottom: '10px', fontStyle: 'italic', marginTop: '10px' }}>
        Total No. of users: {users.length}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};
