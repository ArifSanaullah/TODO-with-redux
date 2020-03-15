export default function(state, action) {
  const query = new RegExp(action.payload.searchQuery, "gi");
  return {
    ...state,
    renderedTodos: state.todos.filter((todo) => todo.value.match(query))
  };
}
