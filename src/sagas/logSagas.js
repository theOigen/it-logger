import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';

import {
  addLogSuccess,
  requestLogsSuccess,
  updateLogSuccess,
  deleteLogSuccess,
  searchLogsSuccess,
  requestError
} from '../actions/logActions';

function* addLog({ log }) {
  try {
    const res = yield call(axios.post, '/logs', log, {
      headers: { 'Content-Type': 'application/json' }
    });

    yield put(addLogSuccess(res.data));
  } catch (err) {
    yield put(requestError(err.response.statusText));
  }
}

function* fetchLogs() {
  try {
    const res = yield call(axios.get, '/logs');

    yield put(requestLogsSuccess(res.data));
  } catch (err) {
    yield put(requestError(err.response.statusText));
  }
}

function* updateLog({ log }) {
  try {
    const res = yield call(axios.put, `/logs/${log.id}`, log, {
      headers: { 'Content-Type': 'application/json' }
    });

    yield put(updateLogSuccess(res.data));
  } catch (err) {
    yield put(requestError(err.response.statusText));
  }
}

function* deleteLog({ id }) {
  try {
    yield call(axios.delete, `/logs/${id}`);

    yield put(deleteLogSuccess(id));
  } catch (err) {
    yield put(requestError(err.response.statusText));
  }
}

function* searchLogs({ text }) {
  try {
    const res = yield call(axios.get, `/logs?q=${text}`);

    yield put(searchLogsSuccess(res.data));
  } catch (err) {
    yield put(requestError(err.response.statusText));
  }
}

export default function* rootSaga() {
  yield takeEvery('REQUEST_ADD_LOG', addLog);
  yield takeEvery('REQUEST_LOGS', fetchLogs);
  yield takeEvery('REQUEST_UPDATE_LOG', updateLog);
  yield takeEvery('REQUEST_DELETE_LOG', deleteLog);
  yield takeEvery('REQUEST_SEARCH_LOGS', searchLogs);
}
