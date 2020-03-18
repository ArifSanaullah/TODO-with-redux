import * as actionTypes from "../actionTypes";
import addTodo from "./addTodo.reducer";
import deleteTodo from "./deleteTodo.reducer";
import changeHandler from "./changeHandler.reducer";
import searchTodo from "./searchTodo.reducer";
import handleCompleted from "./handleCompleted.reducer";
import showAll from "./showAll.reducer";
import showActive from "./showActive.reducer";
import showCompleted from "./showCompleted.reducer";

// Good work on breaking the functionality of the reducer into multiple functions
// But if you see the number of files in the reducer folder is quite large for such a small app 
// If we keep this convention for a big app the reducer files would be in hundreds or thousands 
// what we normally do is breakup individual reducers by entity not the cases from switch themselves
// entity could be Users, Shopping Cart, Checkout-Form etc 
const initialState = {
  todo: {
    value: "",
    completed: false,
    id: Date.now()
  },
  todos: [],
  renderedTodos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return addTodo(state, action);
    
    case actionTypes.CHANGE_HANDLER:
      return changeHandler(state, action);

    case actionTypes.DELETE_TODO:
      return deleteTodo(state, action);

    case actionTypes.SEARCH_TODO:
      return searchTodo(state, action);

    case actionTypes.HANDLE_COMPLETED:
      return handleCompleted(state, action);
    
    case actionTypes.SHOW_ALL:
      return showAll(state, action);
    
    case actionTypes.SHOW_ACTIVE:
      return showActive(state, action);
    
    case actionTypes.SHOW_COMPLETED:
      return showCompleted(state, action);

    default:
      return state;
  }
};

export default reducer;
