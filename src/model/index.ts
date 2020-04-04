import * as subStateActions from './sub-state/action';
import * as authActions from './auth/action';

export const Actions = {
  subState: subStateActions,
  auth: authActions,
};

export { default as store } from './store';
