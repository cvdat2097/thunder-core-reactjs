import { Action } from '../type';
import ActionType from './action-type';

const INITIAL_STATE = {
  counter: 3,
};

export default (state = INITIAL_STATE, action: Action) => {
  const { type } = action;

  switch (type) {
    case ActionType.ACTION:
      return {
        ...state,
        counter: state.counter + 1,
      };

    default:
      return state;
  }
};
