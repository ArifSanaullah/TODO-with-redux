import * as actionTypes from "../actionTypes";

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
  const { whichKey, payload } = action;
  const { todos, todo } = state;
  switch (action.type) {
    case actionTypes.addTodo:
      if (todo.value && whichKey === 13) {
        todos.push(todo);
        return {
          ...state,
          renderedTodos: todos,
          todo: { ...todo, id: Date.now(), value: "" }
        };
      }
      return state;

    case actionTypes.changeHandler:
      return { ...state, todo: { ...action.payload.todo } };

    case actionTypes.deleteTodo:
      const renderedTodos = todos.filter(
        (todo) => todo.value !== payload.todoValue
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
        renderedTodos: todos.filter((todo) => todo.value.match(query))
      };

    case actionTypes.handleCompleted:
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

    default:
      return state;
  }
};

export default reducer;
