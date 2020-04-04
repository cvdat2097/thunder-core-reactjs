import { Action } from '../type';
import ActionType from './action-type';

const INITIAL_STATE = {
  user: {
    userId: null,
    username: null,
    password: null,
    roles: null,
  },
};

export default (state = INITIAL_STATE, action: Action) => {
  const { type, user } = action;

  switch (type) {
    case ActionType.LOGIN_SUCCEEDED:
      return {
        ...state,
        user,
      };

    default:
      return state;
  }
};
