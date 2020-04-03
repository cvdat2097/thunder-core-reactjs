import { Action } from '../type';
import SubAction1 from './action-type';

const INITIAL_STATE = {
  counter: 3,
};

export default (state = INITIAL_STATE, action: Action) => {
  const { type } = action;

  switch (type) {
    case SubAction1.ACTION:
      return {
        ...state,
        counter: state.counter + 1,
      };

    default:
      return state;
  }
};
