import { Link } from 'common/components';
import { paths } from 'common/consts/paths';

export const HomePage = () => {
  return (
    <div>
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
