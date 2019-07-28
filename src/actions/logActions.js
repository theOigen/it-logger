import {
  REQUEST_ADD_LOG,
  REQUEST_LOGS,
  REQUEST_UPDATE_LOG,
  REQUEST_DELETE_LOG,
  REQUEST_SEARCH_LOGS,
  ADD_LOG_SUCCESS,
  RECEIVE_LOGS,
  UPDATE_LOG_SUCCESS,
  DELETE_LOG_SUCCESS,
  SEARCH_LOGS_SUCCESS,
  LOGS_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT
} from './types';

export const addLog = logToAdd => ({
  type: REQUEST_ADD_LOG,
  log: logToAdd
});

export const requestLogs = () => ({
  type: REQUEST_LOGS
});

export const updateLog = updatedLog => ({
  type: REQUEST_UPDATE_LOG,
  log: updatedLog
});

export const deleteLog = id => ({
  type: REQUEST_DELETE_LOG,
  id
});

export const searchLogs = text => ({
  type: REQUEST_SEARCH_LOGS,
  text
});

export const addLogSuccess = log => ({
  type: ADD_LOG_SUCCESS,
  payload: log
});

export const requestLogsSuccess = data => ({
  type: RECEIVE_LOGS,
  payload: data
});

export const updateLogSuccess = log => ({
  type: UPDATE_LOG_SUCCESS,
  payload: log
});

export const deleteLogSuccess = id => ({
  type: DELETE_LOG_SUCCESS,
  payload: id
});

export const searchLogsSuccess = logs => ({
  type: SEARCH_LOGS_SUCCESS,
  payload: logs
});

export const requestError = error => ({
  type: LOGS_ERROR,
  payload: error
});

export const setCurrent = log => ({
  type: SET_CURRENT,
  payload: log
});

export const clearCurrent = () => ({
  type: CLEAR_CURRENT,
  payload: null
});
