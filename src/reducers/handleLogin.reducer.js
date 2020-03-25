export default (state, action) => {
  return { ...state, isUserLoggedIn: action.payload.isUserLoggedIn };
};
