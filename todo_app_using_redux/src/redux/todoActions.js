// Action Types
export const SET_TODOS = "SET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";


// Action Creators (Plain Objects)

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos
});

export const addTodoAction = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

export const deleteTodoAction = (id) => ({
  type: DELETE_TODO,
  payload: id
});

export const updateTodoAction = (todo) => ({
  type: UPDATE_TODO,
  payload: todo
});