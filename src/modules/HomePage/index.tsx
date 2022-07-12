import { Link } from 'common/components/Link';

export const HomePage = () => {
  return (
    <div>
      <h3>Models:</h3>
      <ul>
        <Link href="/users">
          <li>Users</li>
        </Link>
        <Link href="/batches">
          <li>Batches</li>
        </Link>
      </ul>
    </div>
  );
};
