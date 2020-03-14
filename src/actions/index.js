import * as actionTypes from "../actionTypes";

export const addTodo = (e) => {
    return { type: actionTypes.addTodo, whichKey: e.which, payload: { todo: e.target.value } };
}

export const changeHandler = (e) => {
    return { type: actionTypes.changeHandler, payload: { todo: e.target.value } };
}

export const deleteTodo = (todoValue) => {
    return { type: actionTypes.deleteTodo, payload: { todoValue } };
}

export const searchTodo = (e) => {
    return { type: actionTypes.searchTodo, payload: { searchQuery: e.target.value } };
}

export const handleCompleted = (dummy) => {
    console.log(dummy);
    return { type: actionTypes.handleCompleted, payload: {dummy} };
}
