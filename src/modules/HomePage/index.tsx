import { useState } from 'react';

import { Link } from 'common/components';
import { paths } from 'common/consts/paths';
import { pathsApiV1 } from 'common/consts/pathsApiV1';
import { ResponseError } from 'common/types/apiV1';
import { client } from 'common/utils/client';

export const HomePage = () => {
  const [isSeeding, setIsSeeding] = useState<boolean>(false);

  const seedDb = async () => {
    setIsSeeding(true);
    await client.post<null, null | ResponseError>(pathsApiV1.DATABASES, null);
    setIsSeeding(false);
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
            marginTop: '10px',
          }}
          disabled={isSeeding}
          onClick={seedDb}
        >
          Seed DB
        </button>
        {isSeeding && <div>Loading...</div>}
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
