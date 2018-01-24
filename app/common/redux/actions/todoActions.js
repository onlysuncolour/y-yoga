import {
         SET_TODO,
         ADD_TODO,
         REMOVE_TODO,
         ADD_DONE } from './actionTypes';

export const setTodo = todos => ({
    type: SET_TODO,
    todos
})

export const addTodo = todo => ({
    type: ADD_TODO,
    todo
})

export const removeTodo = todo => ({
    type: REMOVE_TODO,
    todo
})

export const addDone = todo => ({
    type: ADD_DONE,
    todo
})

export const getTodoList = () => {
  let todos = {
    todos: [
      {id: 1, type: 'todo', title: '第1条todo'},
      {id: 2, type: 'todo', title: '第2条todo'},
      {id: 3, type: 'todo', title: '第3条todo'},
      {id: 4, type: 'done', title: '第1条done'},
      {id: 5, type: 'done', title: '第2条done'},
    ],
  }
  return dispatch => {
    dispatch(setTodo(todos));
  }
}
