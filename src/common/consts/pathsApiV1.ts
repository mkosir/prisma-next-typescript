const prefixPathApi = '/api/v1';

export const pathsApiV1 = {
  BATCHES: `${prefixPathApi}/batches`,
  BATCHES_DETAILS: (id: string) => `${prefixPathApi}/batches/${id}`,
  USERS: `${prefixPathApi}/users`,
  USERS_DETAILS: (username: string) => `${prefixPathApi}/users/${username}`,
} as const;
