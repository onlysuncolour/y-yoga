// action types
export const actionTypes = {
  // todo
  SET_TODO : 'SET_TODO',
  ADD_TODO : 'ADD_TODO',
  REMOVE_TODO : 'REMOVE_TODO',
  ADD_DONE : 'ADD_DONE',
}

// actions
// todo
export const setTodo = data => ({
    type: actionTypes.SET_TODO,
    data
})
export const addTodo = todo => ({
    type: actionTypes.ADD_TODO,
    todo
})
export const removeTodo = todo => ({
    type: actionTypes.REMOVE_TODO,
    todo
})
export const addDone = todo => ({
    type: actionTypes.ADD_DONE,
    todo
})
export const getTodoList = () => {
  let data = {
    todos: [
      {id: 0, type: 'done', title: '第1条done'},
      {id: 1, type: 'todo', title: '第1条todo'},
      {id: 2, type: 'todo', title: '第2条todo'},
      {id: 3, type: 'todo', title: '第3条todo'},
      {id: 4, type: 'done', title: '第2条done'},
    ],
  }
  return dispatch => {
    dispatch(setTodo(data));
  }
}
