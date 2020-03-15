export default function (state, action) {
    return { ...state, renderedTodos: action.payload.todos.filter(todo => todo.completed) };
}