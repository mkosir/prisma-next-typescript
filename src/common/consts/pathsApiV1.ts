const prefixPathApi = '/api/v1';

const baseUrl = process.env.NODE_ENV === 'test' ? `http://localhost:3000${prefixPathApi}` : prefixPathApi;

export const pathsApiV1 = {
  BATCHES: `${baseUrl}/batches`,
  BATCHES_DETAILS: (id: string) => `${baseUrl}/batches/${id}`,
  DATABASES: `${baseUrl}/databases`,
  USERS: `${baseUrl}/users`,
  USERS_DETAILS: (username: string) => `${baseUrl}/users/${username}`,
} as const;
