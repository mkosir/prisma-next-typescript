import { Link } from 'common/components';
import { paths } from 'common/consts/paths';
import { pathsApiV1 } from 'common/consts/pathsApiV1';
import { ResponseError } from 'common/types/apiV1';
import { client } from 'common/utils/client';

export const HomePage = () => {
  const seedDb = async () => {
    await client.post<null, null | ResponseError>(pathsApiV1.DATABASES, null);
  };

  return (
    <div>
      <button
        style={{
          fontSize: '12px',
          backgroundColor: '#3d9cc23b',
          padding: '2px 8px',
          borderRadius: '3px',
          marginTop: '10px',
        }}
        onClick={seedDb}
      >
        Seed DB
      </button>
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
