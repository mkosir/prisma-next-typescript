const prefixPathApi = '/api/v1';

export const pathsApiV1 = {
  USERS: `${prefixPathApi}/users`,
  USERS_DETAILS: (username: string) => `${prefixPathApi}/users/${username}`,
} as const;
