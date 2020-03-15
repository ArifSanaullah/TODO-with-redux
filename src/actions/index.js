import * as actionTypes from "../actionTypes";

export const addTodo = (e) => {
  return {
    type: actionTypes.addTodo,
    whichKey: e.which,
    payload: { todo: {value: e.target.value} }
  };
};

export const changeHandler = (e, todo) => {
  return { type: actionTypes.changeHandler, payload: { todo: { ...todo, value: e.target.value} } };
};

export const deleteTodo = (todoValue) => {
  return { type: actionTypes.deleteTodo, payload: { todoValue } };
};

export const searchTodo = (e) => {
  return {
    type: actionTypes.searchTodo,
    payload: { searchQuery: e.target.value }
  };
};

export const handleCompleted = (todo) => {
  return {
    type: actionTypes.handleCompleted,
    payload: { ...todo }
  };
};
