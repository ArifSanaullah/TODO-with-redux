import * as actionTypes from "../actionTypes";

export const HANDLE_COMPLETED = (todo) => {
  return {
    type: actionTypes.HANDLE_COMPLETED,
    payload: { ...todo }
  };
};

export const DELETE_TODO = (todoid) => {
  return { type: actionTypes.DELETE_TODO, payload: { todoid } };
};
