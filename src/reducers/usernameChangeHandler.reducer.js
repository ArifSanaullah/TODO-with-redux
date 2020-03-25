export default function (state, action) {
    return { ...state, username: action.payload.username };
}
