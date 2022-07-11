import { Prisma } from '@prisma/client';

import { ServerSidePropsUsers } from 'pages/users';

type Users = ServerSidePropsUsers['users'];
type User = Users[number];

export type UserRowProps = {
  user: User;
};

export const UserRow = ({ user }: UserRowProps) => {
  const purities = user.batches.map((batch) => batch.purity);
  const purityBest = purities.length ? `${Prisma.Decimal.max(...purities).toNumber()}%` : '-';
  const purityAverage = purities.length ? `${Prisma.Decimal.sum(...purities).toNumber()}%` : '-';

  return (
    <div>
      {user.name} | {user.username} | {user.role} | Stats:
      <ul>
        <li>Cooked {user.batches.length} batches</li>
        <li>Best purity {purityBest}</li>
        <li>Average purity {purityAverage}</li>
      </ul>
    </div>
  );
};
