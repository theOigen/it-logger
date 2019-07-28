import {
  REQUEST_ADD_TECH,
  REQUEST_TECHS,
  REQUEST_DELETE_TECH,
  ADD_TECH_SUCCESS,
  RECEIVE_TECHS,
  DELETE_TECH_SUCCESS,
  TECHS_ERROR
} from '../actions/types';

const initialState = {
  techs: null,
  loading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVE_TECHS:
      return {
        ...state,
        techs: payload,
        loading: false
      };
    case ADD_TECH_SUCCESS:
      return {
        ...state,
        techs: [...state.techs, payload],
        loading: false
      };
    case DELETE_TECH_SUCCESS:
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== payload),
        loading: false
      };
    case TECHS_ERROR:
      console.error(payload);
      return {
        ...state,
        error: payload,
        loading: false
      };
    case REQUEST_TECHS:
    case REQUEST_ADD_TECH:
    case REQUEST_DELETE_TECH:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
