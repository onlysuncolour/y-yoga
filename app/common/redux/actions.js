// action types
export const actionTypes = {
  // todo
  SET_TODO : 'SET_TODO',
  ADD_TODO : 'todo',
  REMOVE_TODO : 'REMOVE_TODO',
  ADD_DONE : 'done',
  // popup
  ADD_POPUP : 'ADD_POPUP',
  REMOVE_POPUP : 'REMOVE_POPUP',
  // me
  SET_ME : 'SET_ME',
  REMOVE_ME : 'REMOVE_ME',
}

// actions
// todo
export const setTodo = data => {
  return {
    type: actionTypes.SET_TODO,
    data
}}

export const addTodo = data => {
  let todo = {type: actionTypes.ADD_TODO, title: data}
  return dispatch => {
    Request.Todo.create(todo).then(resp => {
      if(resp.ok) {
        dispatch({
          type: actionTypes.ADD_TODO,
          todo: resp.data
        });
      }
    })
  }
}
export const removeTodo = todo => ({
    type: actionTypes.REMOVE_TODO,
    todo
})

export const addDone = (todo) => {
  todo.type = "done"
  return dispatch =>{
    Request.Todo.update(todo).then(resp => {
      if(resp.ok) {
        dispatch({
          type: actionTypes.ADD_DONE,
          done: resp.data
        });
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

export const addPopup = (popup) => {
  return {
    type: actionTypes.ADD_POPUP,
    popup,
  }
}

export const removePopup = () => {
  return {
    type: actionTypes.REMOVE_POPUP
  }
}

export const setMe = (me) => {
  return {
    type: actionTypes.SET_ME,
    me,
  }
}
export const removeMe = () => {
  return {
    type: actionTypes.REMOVE_ME,
  }
}
