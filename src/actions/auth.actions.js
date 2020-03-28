import * as actionTypes from "../actionTypes";

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
