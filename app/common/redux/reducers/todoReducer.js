import { actionTypes } from 'actions';

const initialState = {
  todos: [],
};

const setTodo = (state, action) => {
  let todos = action.data.todos;
  return {todos}
}

const addTodo = (state, action) => {
  let todos = Utils.copy(state.todos);
  todos.push(action.todo)
  return {todos}
}

const removeTodo = (state, action) => {
  let todos = Utils.copy(state.todos);
  for (var i = 0; i < todos.length; i++) {
    if (todos[i]._id == action.todo._id) {
      todos.splice(i, 1);
      break
    }
  }
  return {todos}
}

const addDone = (state, action) => {
  let todos = Utils.copy(state.todos), done = action.done;
  for (var i = 0; i < todos.length; i++) {
    if (todos[i]._id == done._id) {
      todos.splice(i, 1);
      break
    }
  }
  todos.push(done)
  return {todos}
}

const updateTodo = (state, action) => {
  let todos = Utils.copy(state.todos), todo = action.todo;
  for (var i = 0; i < todos.length; i++) {
    if (todos[i]._id == todo._id) {
      todos.splice(i, 1);
      break
    }
  }
  todos.push(todo)
  return {todos}
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TODO: return setTodo(state, action);
    case actionTypes.ADD_TODO: return addTodo(state, action);
    case actionTypes.REMOVE_TODO: return removeTodo(state, action);
    case actionTypes.ADD_DONE: return addDone(state, action);
    case actionTypes.UPDATE_TODO: return updateTodo(state, action);
    default: return state;
  }
};

module.exports = {todoReducer}
