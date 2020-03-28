export default function(state, action) {
  return { ...state, todo: { ...action.payload.todo } };
}
