import { call, put, takeEvery, all } from 'redux-saga/effects';
import { fakeRequest } from '../../mock/fake';
import { gotSomething } from './action';
import ActionType from './action-type';

function* doSomethingAsync() {
  yield call(fakeRequest, { body: 2 });
  yield put(gotSomething());
}

export default function* () {
  yield all([takeEvery(ActionType.DO_SOMETHING_ASYNC, doSomethingAsync)]);
}
