import Link from 'next/link';

export const HomePage = () => {
  return (
    <div>
      <h3>Models:</h3>
      <ul>
        <Link href="/users">
          <a>
            <li>Users</li>
          </a>
        </Link>
        <Link href="/batches">
          <a>
            <li>Batches</li>
          </a>
        </Link>
      </ul>
    </div>
  );
};
