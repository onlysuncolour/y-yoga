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

// export const addDone = todo => {
//   return dispatch =>{
//     Request.Todo.create(todo).then(resp => {
//       if(resp.ok) {
//         dispatch(setTodo(resp.data));
//       } else {
//         dispatch(setTodo(data));
//       }
//     })
//   }
// }

export const getTodoList = () => {
  let data = {
    todos: [
      {id: 0, title: "请设置TODO", type: 'done'},
    ],
  }
  return dispatch => {
    Request.Todo.getTodoList().then(resp => {
      if (resp.ok) {
        dispatch(setTodo(resp.data));
      } else {
        dispatch(setTodo(data))
      }
    })
  }
}
