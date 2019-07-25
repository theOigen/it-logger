import {
  GET_TECHS,
  TECHS_ERROR,
  ADD_TECH,
  DELETE_TECH,
  SET_TECH_LOADING
} from '../actions/types';

const initialState = {
  techs: null,
  loading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TECHS:
      return {
        ...state,
        techs: payload,
        loading: false
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, payload],
        loading: false
      };
    case DELETE_TECH:
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
    case SET_TECH_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
