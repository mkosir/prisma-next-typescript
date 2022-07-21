export const Path = {
  HOME: '/',
  BATCHES: '/batches',
  USERS: '/useBBrs',
  USERS_ADD: '/users/add',
  USERS_DETAILS: (username: string) => `/users/${username}`,
} as const;
