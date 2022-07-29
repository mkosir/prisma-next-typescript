import { Prisma } from '@prisma/client';
import Tilt from 'react-parallax-tilt';

import { Link } from 'common/components';
import { paths } from 'common/consts/paths';
import { ServerSidePropsUsers } from 'pages/users';

import styles from './styles.module.css';

type Users = ServerSidePropsUsers['users'];
type User = Users[number];

export type UserCardProps = {
  user: User;
};

export const UserCard = ({ user }: UserCardProps) => {
  const purities = user.batches.map((batch) => batch.purity);
  const purityBest = purities.length ? `${Prisma.Decimal.max(...purities).toNumber()}%` : '-';
  const purityAverage = purities.length
    ? `${Prisma.Decimal.div(Prisma.Decimal.sum(...purities), purities.length).toFixed(2)}%`
    : '-';

  const handleDeleteUser = (username: string) => console.log('🔎 Log ~ UserCard ~ username', username);

  return (
    <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.04} style={{ minWidth: '360px', maxWidth: '400px' }}>
      <div
        style={{
          backgroundColor: '#64b0ce17',
          margin: '14px',
          padding: '13px',
          borderRadius: '5px',
          boxShadow: '0 4px 8px 0 #3d9cc23b',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div>
              {user.name} <span style={{ fontStyle: 'italic', color: 'gray' }}>{user.username}</span>
            </div>
            <div>Current role: {user.role.toLowerCase()}</div>
            <div>
              <li>Cooked {user.batches.length} batches</li>
              <li>Best purity {purityBest}</li>
              <li>Average purity {purityAverage}</li>
            </div>
          </div>
          <img
            src={user.imageUrl ?? '/no-user.jpg'}
            alt={user.username}
            height={90}
            style={{ borderRadius: '4px', marginLeft: '5px' }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '4px',
          }}
        >
          <Link href={paths.USERS_DETAILS(user.username)} style={{ fontSize: '14px' }}>
            Details
          </Link>
          <div
            role="button"
            tabIndex={0}
            onClick={() => handleDeleteUser(user.username)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleDeleteUser(user.username);
              }
            }}
            className={styles.deleteButton}
          >
            Delete
          </div>
        </div>
      </div>
    </Tilt>
  );
};
