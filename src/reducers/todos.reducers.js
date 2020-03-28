import {
  ADD_TODO,
  ADD_TODO_BY_BUTTON,
  CHANGE_HANDLER,
  SEARCH_TODO
} from "../actionTypes";

const initialState = {
  todo: {
    value: "",
    completed: false,
    id: Date.now()
  },
  todos: [],
  renderedTodos: []
};

export const todosReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      if (state.todo.value) {
        state.todos.unshift(state.todo);
        return {
          ...state,
          renderedTodos: state.todos,
          todo: { ...state.todo, id: Date.now(), value: "" }
        };
      }
      return state;

    case ADD_TODO_BY_BUTTON:
      if (state.todo.value) {
        const renderedTodos = state.todos.unshift(action.payload);
        return {
          ...state,
          todos: renderedTodos,
          renderedTodos,
          todo: { ...state.todo, value: "", id: Date.now() }
        };
      }
      return state;

    case CHANGE_HANDLER:
      return { ...state, todo: { ...action.payload.todo } };

    case SEARCH_TODO:
      const query = new RegExp(action.payload.searchQuery, "gi");
      return {
        ...state,
        renderedTodos: state.todos.filter((todo) => todo.value.match(query))
      };

    default:
      return state;
  }
};
