import { Prisma } from '@prisma/client';
import Tilt from 'react-parallax-tilt';

import { Link } from 'common/components/Link';
import { ServerSidePropsUsers } from 'pages/users';

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

  return (
    <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} style={{ maxWidth: '400px' }}>
      <Link href={`users/${user.id}`} isUnstyled>
        <a style={{ textDecoration: 'none', color: 'inherit' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(172, 201, 243, 0.07)',
              margin: '10px 0',
              padding: '15px',
              borderRadius: '5px',
              boxShadow: '0 4px 8px 0 rgba(13, 99, 220, 0.13)',
            }}
          >
            <div>
              <div>
                {user.name} - {user.username}
              </div>
              <div>Current role: {user.role.toLowerCase()}</div>
              <div>
                <li>Cooked {user.batches.length} batches</li>
                <li>Best purity {purityBest}</li>
                <li>Average purity {purityAverage}</li>
              </div>
            </div>
            <img src={user.imageUrl ?? '/no-user.jpg'} alt="user" width={85} style={{ borderRadius: '4px' }} />
          </div>
        </a>
      </Link>
    </Tilt>
  );
};
