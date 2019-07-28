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
  SET_CURRENT,
  CLEAR_CURRENT,
  LOGS_ERROR
} from '../actions/types';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVE_LOGS:
      return {
        ...state,
        logs: payload,
        loading: false
      };
    case ADD_LOG_SUCCESS:
      return {
        ...state,
        logs: [...state.logs, payload],
        loading: false
      };
    case DELETE_LOG_SUCCESS:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== payload),
        loading: false
      };
    case UPDATE_LOG_SUCCESS:
      return {
        ...state,
        logs: state.logs.map(log => (log.id === payload.id ? payload : log)),
        loading: false
      };
    case SEARCH_LOGS_SUCCESS:
      return {
        ...state,
        logs: payload,
        loading: false
      };
    case SET_CURRENT:
    case CLEAR_CURRENT:
      return {
        ...state,
        current: payload
      };
    case REQUEST_ADD_LOG:
    case REQUEST_LOGS:
    case REQUEST_UPDATE_LOG:
    case REQUEST_DELETE_LOG:
    case REQUEST_SEARCH_LOGS:
      return {
        ...state,
        loading: true
      };
    case LOGS_ERROR:
      console.error(payload);
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
