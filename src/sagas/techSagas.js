import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';

import {
  addTechSuccess,
  requestTechsSuccess,
  deleteTechSuccess,
  requestError
} from '../actions/techActions';

function* addTech({ tech }) {
  try {
    const res = yield call(axios.post, '/techs', tech, {
      headers: { 'Content-Type': 'application/json' }
    });

    yield put(addTechSuccess(res.data));
  } catch (err) {
    yield put(requestError(err.response.statusText));
  }
}

function* fetchTechs() {
  try {
    const res = yield call(axios.get, '/techs');

    yield put(requestTechsSuccess(res.data));
  } catch (err) {
    yield put(requestError(err.response.statusText));
  }
}

function* deleteTech({ id }) {
  try {
    yield call(axios.delete, `/techs/${id}`);

    yield put(deleteTechSuccess(id));
  } catch (err) {
    yield put(requestError(err.response.statusText));
  }
}

export default function* rootSaga() {
  yield takeEvery('REQUEST_ADD_TECH', addTech);
  yield takeEvery('REQUEST_TECHS', fetchTechs);
  yield takeEvery('REQUEST_DELETE_TECH', deleteTech);
}
