type PathValue = `/${string}` | ((...args: ReadonlyArray<string>) => `/${string}`);
type Path = Record<string, PathValue>;

export const path: Path = {
  HOME: '/',
  BATCHES: '/batches',
  USERS: '/users',
  USERS_ADD: '/users/add',
  USERS_DETAILS: (username: string) => `/users/${username}`,
} as const;
