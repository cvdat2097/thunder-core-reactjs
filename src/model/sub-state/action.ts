import ActionType from './action-type';

export const doSomethingAsync = () => ({
  type: ActionType.DO_SOMETHING_ASYNC,
});

export const gotSomething = () => ({
  type: ActionType.ACTION,
});
