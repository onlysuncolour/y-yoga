// action types
export const actionTypes = {
  // todo
  SET_TODO : 'SET_TODO',
  ADD_TODO : 'todo',
  REMOVE_TODO : 'REMOVE_TODO',
  ADD_DONE : 'done',
}

// actions
// todo
export const setTodo = data => {
  return {
    type: actionTypes.SET_TODO,
    data
}}
// export const addTodo = todo => ({
//     type: actionTypes.ADD_TODO,
//     todo
// })
export const addTodo = data => {
  console.log('actions.addTodo()')
  let todo = {type: actionTypes.ADD_TODO, title: data}
  return dispatch => {
    Request.Todo.create(todo).then(resp => {
      if(resp.ok) {
        return resp.data;
      }
    })
  }
}
export const removeTodo = todo => ({
    type: actionTypes.REMOVE_TODO,
    todo
})

// export const addDone = todo => ({
//   type: actionTypes.ADD_DONE,
//   todo
// })

export const addDone = (todo) => {
  todo.type = 'done'
  return dispatch =>{
    Request.Todo.update(todo).then(resp => {
      debugger
      if(resp.ok) {
        dispatch(setTodo(resp.data));
      } else {
        dispatch(setTodo(data));
      }
    })
  }
}

export const getTodoList = () => {
  let data = {
    todos: [
      {title: "请设置TODO", type: 'done'},
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
