import styles from 'common/styles/Home.module.css';
import { ServerSidePropsUsers } from 'pages/users';

export const UsersPage = ({ users }: ServerSidePropsUsers) => {
  console.log('🔎 Log ~ users', users);

  return <div className={styles.container}>Users</div>;
};
