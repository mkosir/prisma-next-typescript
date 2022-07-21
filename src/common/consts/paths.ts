export const paths = {
  HOME: '/',
  BATCHES: '/batches',
  USERS: '/users',
  USERS_ADD: '/users/add',
  USERS_DETAILS: (username: string) => `/users/${username}`,
} as const;
