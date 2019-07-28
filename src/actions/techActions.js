import {
  REQUEST_ADD_TECH,
  REQUEST_TECHS,
  REQUEST_DELETE_TECH,
  ADD_TECH_SUCCESS,
  RECEIVE_TECHS,
  DELETE_TECH_SUCCESS,
  TECHS_ERROR
} from './types';

export const addTech = techToAdd => ({
  type: REQUEST_ADD_TECH,
  tech: techToAdd
});

export const requestTechs = () => ({
  type: REQUEST_TECHS
});

export const deleteTech = id => ({
  type: REQUEST_DELETE_TECH,
  id
});

export const addTechSuccess = log => ({
  type: ADD_TECH_SUCCESS,
  payload: log
});

export const requestTechsSuccess = data => ({
  type: RECEIVE_TECHS,
  payload: data
});

export const deleteTechSuccess = id => ({
  type: DELETE_TECH_SUCCESS,
  payload: id
});

export const requestError = error => ({
  type: TECHS_ERROR,
  payload: error
});
