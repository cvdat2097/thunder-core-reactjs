import { all } from 'redux-saga/effects';

import subStateSaga from './sub-state/saga';
import authSaga from './auth/saga';

export default function* () {
  yield all([authSaga(), subStateSaga()]);
}
