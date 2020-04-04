enum StorageKey {
  TOKEN = 'token',
  REFRESH_TOKEN = 'refresh_token',
}

export const saveToken = (token: string) =>
  localStorage.setItem(StorageKey.TOKEN, token);

export const getToken = () => localStorage.getItem(StorageKey.TOKEN);

export const removeToken = () => localStorage.removeItem(StorageKey.TOKEN);

export const saveRefreshToken = (refreshToken: string) =>
  localStorage.setItem(StorageKey.REFRESH_TOKEN, refreshToken);

export const getRefreshToken = () =>
  localStorage.getItem(StorageKey.REFRESH_TOKEN);

export const removeRefreshToken = () =>
  localStorage.removeItem(StorageKey.REFRESH_TOKEN);
