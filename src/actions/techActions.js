import {
  GET_TECHS,
  TECHS_ERROR,
  ADD_TECH,
  DELETE_TECH,
  SET_TECH_LOADING
} from './types';
import axios from 'axios';

export const getTechs = () => async dispatch => {
  try {
    dispatch(setLoading());

    const res = await axios.get('/techs');

    dispatch({
      type: GET_TECHS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const addTech = tech => async dispatch => {
  try {
    dispatch(setLoading());

    const res = await axios.post('/techs', tech, {
      headers: { 'Content-Type': 'application/json' }
    });

    dispatch({
      type: ADD_TECH,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const deleteTech = id => async dispatch => {
  try {
    dispatch(setLoading());

    await axios.delete(`/techs/${id}`);

    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_TECH_LOADING
  };
};
