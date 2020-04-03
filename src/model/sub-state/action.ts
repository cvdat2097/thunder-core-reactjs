import SubAction1 from './action-type';

export const doSomething = (payload: any) => ({
  type: SubAction1.ACTION,
  ...payload,
});
