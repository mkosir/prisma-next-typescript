import { Link } from 'common/components';
import { Path } from 'common/consts/Path';

export const HomePage = () => {
  return (
    <div>
      <h3>Models:</h3>
      <ul>
        <Link href={Path.USERS}>
          <li>Users</li>
        </Link>
        <Link href={Path.BATCHES}>
          <li>Batches</li>
        </Link>
      </ul>
    </div>
  );
};
