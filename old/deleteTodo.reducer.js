export default function(state, action) {
  const renderedTodos = state.todos.filter(
    (todo) => todo.id !== action.payload.todoid
  );
  return {
    ...state,
    renderedTodos,
    todos: renderedTodos
  };
}
