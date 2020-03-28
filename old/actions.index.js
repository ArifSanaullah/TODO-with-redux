import * as actionTypes from "../actionTypes";

// ACTION TYPES SHOULD ALWAYS BE IN UPPERCASE
// e.g actionTypes.ADD_TODO
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

export const HANDLE_LOGIN = (event, username, password, history) => {
  event.preventDefault();
  const isUserNameValid = (username) => /^[a-zA-Z0-9]+$/.test(username);

  const isPasswordValid = (password) =>
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password);

  const isUserLoggedIn = isUserNameValid(username) && isPasswordValid(password);

  isUserLoggedIn && history.push("/home");

  return {
    type: actionTypes.HANDLE_LOGIN,
    payload: { isUserLoggedIn }
  };
};

export const USERNAME_CHANGE_HANDLER = (event) => {
  return {
    type: actionTypes.USERNAME_CHANGE_HANDLER,
    payload: { username: event.target.value }
  };
};

export const PASSWORD_CHANGE_HANDLER = (event) => {
  return {
    type: actionTypes.PASSWORD_CHANGE_HANDLER,
    payload: {password: event.target.value}
  }
}
