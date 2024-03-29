const clientBase = async <T>(path: string, config: RequestInit): Promise<{ response: Response; data: T }> => {
  const request = new Request(path, config);
  const response = await fetch(request);
  const data = (await response.json()) as T;

  return { response, data };
};

const get = async <T>(path: string, config?: RequestInit) => {
  const initConfig = { ...config, method: 'GET' };
  return await clientBase<T>(path, initConfig);
};

const post = async <T, U>(path: string, data: T, config?: RequestInit) => {
  const initConfig = {
    ...config,
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return await clientBase<U>(path, initConfig);
};

const _delete = async <T>(path: string, config?: RequestInit) => {
  const initConfig = { ...config, method: 'DELETE' };
  return await clientBase<T>(path, initConfig);
};

export const client = {
  get,
  post,
  delete: _delete,
};
