import { HANDLE_COMPLETED, DELETE_TODO} from "../actionTypes";

const initialState = {
  todo: {
    value: "",
    completed: false,
    id: Date.now()
  },
  todos: [],
  renderedTodos: []
};

export const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_COMPLETED:
      const result = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return {
        ...state,
        todos: result,
        renderedTodos: result
      };

    case DELETE_TODO:
      const renderedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.todoid
      );
      return {
        ...state,
        renderedTodos,
        todos: renderedTodos
      };

    default:
      return state;
  }
};
