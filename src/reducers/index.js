import * as actionTypes from "../actionTypes";
import addTodo from "./addTodo.reducer";
import deleteTodo from "./deleteTodo.reducer";
import changeHandler from "./changeHandler.reducer";
import searchTodo from "./searchTodo.reducer";
import handleCompleted from "./handleCompleted.reducer";

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
    case actionTypes.addTodo:
      return addTodo(state, action);
    
    case actionTypes.changeHandler:
      return changeHandler(state, action);

    case actionTypes.deleteTodo:
      return deleteTodo(state, action);

    case actionTypes.searchTodo:
      return searchTodo(state, action);

    case actionTypes.handleCompleted:
      return handleCompleted(state, action);

    default:
      return state;
  }
};

export default reducer;
