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
      table
    </div>
  );
};
