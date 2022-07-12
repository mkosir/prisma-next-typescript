import { Prisma } from '@prisma/client';
import Tilt from 'react-parallax-tilt';

import { ServerSidePropsUsers } from 'pages/users';

type Users = ServerSidePropsUsers['users'];
type User = Users[number];

export type UserRowProps = {
  user: User;
};

export const UserCard = ({ user }: UserRowProps) => {
  const purities = user.batches.map((batch) => batch.purity);
  const purityBest = purities.length ? `${Prisma.Decimal.max(...purities).toNumber()}%` : '-';
  const purityAverage = purities.length ? `${Prisma.Decimal.sum(...purities).toNumber()}%` : '-';

  return (
    <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} style={{ width: '400px' }}>
      <img src="https://static.wikia.nocookie.net/breakingbad/images/e/e7/BB-S5B-Walt-590.jpg" alt="user" width={85} />
      <div
        style={{
          backgroundColor: 'rgba(172, 201, 243, 0.1)',
          margin: '10px 0',
          padding: '15px',
          borderRadius: '5px',
          boxShadow: '0 4px 8px 0 rgba(13, 99, 220, 0.2)',
        }}
      >
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
    </Tilt>
  );
};
