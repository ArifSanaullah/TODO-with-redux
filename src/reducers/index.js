import * as actionTypes from "../actionTypes";

const initialState = {
  todo: "",
  todos: [],
  renderedTodos: [],
  completed: false
};

const reducer = (state = initialState, action) => {
  const { whichKey, payload } = action;
  const { todos, todo, completed } = state;
  switch (action.type) {
    case actionTypes.addTodo:
      if (todo && whichKey === 13) {
        todos.push(todo);
        return { ...state, renderedTodos: todos, todo: "" };
      }
      return state;

    case actionTypes.changeHandler:
      return { ...state, todo: payload.todo };

    case actionTypes.deleteTodo:
      const renderedTodos = todos.filter(
        (todo) => todo !== payload.todoValue
      );
      return {
        ...state,
        renderedTodos,
        todos: renderedTodos
      };

    case actionTypes.searchTodo:
      const query = new RegExp(payload.searchQuery, "gi");
      return {
        ...state,
        renderedTodos: todos.filter((todo) => todo.match(query))
      };
    
    case actionTypes.handleCompleted:
      console.log(state);
      return {
        ...state, renderedTodos: todos.map((todo) => {
          if (todo === payload.dummy.todo) {
          return {...state, renderedTodos: renderedTodos[todo]}
          }
          return state;
      })};

    default:
      return state;
  }
};

export default reducer;
