import * as actionTypes from "../actionTypes";

export const SHOW_ALL = (todos) => {
  return {
    type: actionTypes.SHOW_ALL,
    payload: { todos }
  };
};

export const SHOW_ACTIVE = (todos) => {
  return {
    type: actionTypes.SHOW_ACTIVE,
    payload: { todos }
  };
};

export const SHOW_COMPLETED = (todos) => {
  return {
    type: actionTypes.SHOW_COMPLETED,
    payload: { todos }
  };
};
