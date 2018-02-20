import { actionTypes } from 'actions';

const initialState = {
  todos: [],
};

const setTodo = (state, action) => {
  let todos = action.data.todos;
  return {todos}
}

const addTodo = (state, action) => {
  console.log('todoReducer.addTodo()')
  let todos = state.todos;
  // let id = todos.length;
  // todos.push({id, type: 'todo', title: action.todo})
  todos.push({type: 'todo', title: action.todo})
  return {todos}
}

const removeTodo = (state, action) => {
  let todos = state.todos;
  for (var i = 0; i < todos.length; i++) {
    if (todos[i]._id == action.todo._id) {
      todos.splice(i, 1);
      break
    }
  }
  return {todos}
}

const addDone = (state, action) => {
  let todos = state.todos;
  for (var i = 0; i < todos.length; i++) {
    if (todos[i]._id == action.todo._id) {
      todos[i].type = 'done'
      break
    }
  }
  return {todos}
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TODO: return setTodo(state, action);
    case actionTypes.ADD_TODO: return addTodo(state, action);
    case actionTypes.REMOVE_TODO: return removeTodo(state, action);
    case actionTypes.ADD_DONE: return addDone(state, action);
    default: return state;
  }
};

module.exports = {todoReducer}
