import { useState } from 'react';

import { Link, Progress } from 'common/components';
import { paths } from 'common/consts/paths';
import { pathsApiV1 } from 'common/consts/pathsApiV1';
import { ResponseError } from 'common/types/apiV1';
import { client } from 'common/utils/client';

export const HomePage = () => {
  const [isSeedingDb, setIsSeedingDb] = useState<boolean>(false);

  const seedDb = async () => {
    setIsSeedingDb(true);
    await client.post<null, null | ResponseError>(pathsApiV1.DATABASES, null);
    setIsSeedingDb(false);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <button
          style={{
            fontSize: '12px',
            backgroundColor: '#3d9cc23b',
            padding: '2px 8px',
            borderRadius: '3px',
            margin: '10px  6px  10px 0',
          }}
          disabled={isSeedingDb}
          onClick={seedDb}
        >
          Seed DB
        </button>
        {isSeedingDb && <Progress />}
      </div>
      <h3>Models:</h3>
      <ul>
        <Link href={paths.USERS}>
          <li>Users</li>
        </Link>
        <Link href={paths.BATCHES}>
          <li>Batches</li>
        </Link>
      </ul>
    </div>
  );
};
