import Link from 'next/link';

export const HomePage = () => {
  return (
    <div>
      <h3>💊 Minimal GraphQL boilerplate with Prisma, Next.js and TypeScript</h3>
      <span>Models:</span>
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
