export default function (state, action) {
    return { ...state, password: action.payload.password }
}
