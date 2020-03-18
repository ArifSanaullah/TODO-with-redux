import * as actionTypes from "../actionTypes";

// ACTION TYPES SHOULD ALWAYS BE IN UPPERCASE 
// e.g actionTypes.ADD_TODO
export const ADD_TODO = (e) => {
  return {
    type: actionTypes.ADD_TODO,
    whichKey: e.which,
    payload: { todo: { value: e.target.value } }
  };
};

export const CHANGE_HANDLER = (e, todo) => {
  return {
    type: actionTypes.CHANGE_HANDLER,
    payload: { todo: { ...todo, value: e.target.value } }
  };
};

export const DELETE_TODO = (todoid) => {
  return { type: actionTypes.DELETE_TODO, payload: { todoid } };
};

export const SEARCH_TODO = (e) => {
  return {
    type: actionTypes.SEARCH_TODO,
    payload: { searchQuery: e.target.value }
  };
};

export const HANDLE_COMPLETED = (todo) => {
  return {
    type: actionTypes.HANDLE_COMPLETED,
    payload: { ...todo }
  };
};

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
