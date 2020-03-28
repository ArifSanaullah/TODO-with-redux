import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from "../actionTypes";

const initialState = {
  todo: {
    value: "",
    completed: false,
    id: Date.now()
  },
  todos: [],
  renderedTodos: [],
  visibilityFilter: SHOW_ALL
};

export const visibilityFiltersReducers = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALL:
      console.log(action);
      return {
        ...state,
        todos: action.payload.todos,
        renderedTodos: action.payload.todos,
        visibilityFilter: SHOW_ALL
      };
    case SHOW_ACTIVE:
      return {
        ...state,
        todos: action.payload.todos,
        renderedTodos: action.payload.todos.filter((todo) => !todo.completed),
        visibilityFilter: SHOW_ACTIVE
      };
    case SHOW_COMPLETED:
      return {
        ...state,
        todos: action.payload.todos,
        renderedTodos: action.payload.todos.filter((todo) => todo.completed),
        visibilityFilter: SHOW_COMPLETED
      };
    default:
      return state;
  }
};
