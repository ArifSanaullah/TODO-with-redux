export default function(state, action) {
  const renderedTodos = state.todos.filter(
    (todo) => todo.value !== action.payload.todoValue
  );
  return {
    ...state,
    renderedTodos,
    todos: renderedTodos
  };
}
