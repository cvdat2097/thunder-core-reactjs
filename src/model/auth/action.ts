import ActionType from './action-type';

export const login = (username: string, password: string) => ({
  type: ActionType.LOGIN,
  username,
  password,
});

export const loginSucceeded = (user: any) => ({
  type: ActionType.LOGIN_SUCCEEDED,
  user,
});

export const loginFailed = () => ({
  type: ActionType.LOGIN_FAILED,
});
