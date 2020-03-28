import * as actionTypes from "../actionTypes";

export const ADD_TODO = (e) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: { todo: { value: e.target.value } }
  };
};

export const ADD_TODO_BY_BUTTON = (todo) => {
  return {
    type: actionTypes.ADD_TODO_BY_BUTTON,
    payload: { ...todo }
  };
};

export const CHANGE_HANDLER = (e, todo) => {
  return {
    type: actionTypes.CHANGE_HANDLER,
    payload: { todo: { ...todo, value: e.target.value } }
  };
};

export const SEARCH_TODO = (e) => {
  return {
    type: actionTypes.SEARCH_TODO,
    payload: { searchQuery: e.target.value }
  };
};
