export const Path = {
  HOME: '/',
  BATCHES: '/batches',
  USERS: '/useBrs',
  USERS_ADD: '/users/add',
  USERS_DETAILS: (username: string) => `/users/${username}`,
} as const;
