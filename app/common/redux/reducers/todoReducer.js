import {SET_TODO,
        ADD_TODO,
        REMOVE_TODO,
        ADD_DONE } from '../actions/actionTypes';

const initialState = {
  todos: [],
};

const setTodo = (state, action) => {
  let todos = action.data.todos;
  return {todos}
}

const addTodo = (state, action) => {
  let todos = state.todos;
  let id = todos.length;
  todos.push({id, type: 'todo', title: action.todo})
  return {todos}
}

const removeTodo = (state, action) => {
  let todos = state.todos;
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id == action.todo.id) {
      todos.splice(i, 1);
      break
    }
  }
  return {todos}
}

const addDone = (state, action) => {
  let todos = state.todos;
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id == action.todo.id) {
      todos[i].type = 'done'
      break
    }
  }
  return {todos}
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO: return setTodo(state, action);
    case ADD_TODO: return addTodo(state, action);
    case REMOVE_TODO: return removeTodo(state, action);
    case ADD_DONE: return addDone(state, action);
    default: return state;
  }
};

module.exports = {todoReducer}
