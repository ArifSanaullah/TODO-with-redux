export default function(state, action) {
    if (state.todo.value) {
        state.todos.unshift(state.todo);
        return {
          ...state,
          renderedTodos: state.todos,
          todo: { ...state.todo, id: Date.now(), value: "" }
        };
      }
      return state;
}
