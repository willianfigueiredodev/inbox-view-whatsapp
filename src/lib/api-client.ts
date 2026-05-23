export const api = {
  get: async <T>(url: string, params?: Record<string, unknown>): Promise<T> => {
    const query = params
      ? `?${new URLSearchParams(
          Object.entries(params)
            .filter(([, value]) => value !== undefined && value !== null)
            .map(([key, value]) => [key, String(value)]),
        ).toString()}`
      : '';

    const response = await fetch(`${url}${query}`, {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`GET ${url} failed with status ${response.status}`);
    }

    return response.json() as Promise<T>;
  },

  post: async <T>(url: string, body?: unknown): Promise<T> => {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(body ?? {}),
    });

    if (!response.ok) {
      throw new Error(`POST ${url} failed with status ${response.status}`);
    }

    return response.json() as Promise<T>;
  },

  patch: async <T>(url: string, body?: unknown): Promise<T> => {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(body ?? {}),
    });

    if (!response.ok) {
      throw new Error(`PATCH ${url} failed with status ${response.status}`);
    }

    return response.json() as Promise<T>;
  },
};
