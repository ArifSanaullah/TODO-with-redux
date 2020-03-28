import * as actionTypes from "../actionTypes";

const initialState = {
  username: "",
  password: "",
  isUserLoggedIn: false
};

export const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USERNAME_CHANGE_HANDLER:
      return { ...state, username: action.payload.username };
    
    case actionTypes.PASSWORD_CHANGE_HANDLER:
      return { ...state, password: action.payload.password };
    
    case actionTypes.HANDLE_LOGIN:
      return { ...state, isUserLoggedIn: action.payload.isUserLoggedIn };
    
    default:
      return state;
  
  }
}
