export default function (state, action) {
    return { ...state, renderedTodos: action.payload.todos };
}