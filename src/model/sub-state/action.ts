import { createAction } from '../helper';

import SubAction1 from './action-type';

export const doSomethingAsync = createAction(SubAction1.DO_SOMETHING_ASYNC);

export const gotSomething = createAction(SubAction1.ACTION);
