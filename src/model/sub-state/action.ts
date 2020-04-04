import SubAction1 from './action-type';

export const doSomethingAsync = (payload: any) => ({
  type: SubAction1.DO_SOMETHING_ASYNC,
  ...payload,
});

export const gotSomething = (payload: any) => ({
  type: SubAction1.ACTION,
  ...payload,
});
