export default function(state, action) {
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
}
