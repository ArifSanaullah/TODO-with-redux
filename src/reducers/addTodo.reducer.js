export default function(state, action) {
    if (state.todo.value && action.whichKey === 13) {
        state.todos.push(state.todo);
        return {
          ...state,
          renderedTodos: state.todos,
          todo: { ...state.todo, id: Date.now(), value: "" }
        };
      }
      return state;
}