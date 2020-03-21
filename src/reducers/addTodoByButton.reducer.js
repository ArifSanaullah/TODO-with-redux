export default function (state, action) {
    if (state.todo.value) {
        state.todos.unshift(action.payload);
        return {...state, renderedTodos: state.todos, todo: {...state.todo, value: "", id: Date.now()}}
    }
}
