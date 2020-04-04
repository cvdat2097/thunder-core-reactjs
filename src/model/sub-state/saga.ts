import { call, put, takeEvery } from 'redux-saga/effects';
import { fakeRequest } from '../../mock/fake';
import { gotSomething } from './action';
import SubAction1 from './action-type';

function* doSomethingAsync() {
  const data = yield call(fakeRequest, { body: 2 });
  yield put(gotSomething(data));
}

export default function* () {
  yield takeEvery(SubAction1.DO_SOMETHING_ASYNC, doSomethingAsync);
}
