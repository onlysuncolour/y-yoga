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
      {id: 0, title: "导航 -- 主要是react-router与导航样式", type: 'done'},
      {id: 1, title: "登录 注册 -- 主要是各种权限控制、与后端交互", type: 'todo'},
      {id: 2, title: "弹出浮层的样式、交互", type: 'todo'},
      {id: 3, title: "双人主页 -- 写一个统一的单人页面", type: 'todo'},
      {id: 4, title: "单人页面 -- 俩人各写各的", type: 'todo'},
      {id: 5, title: "单人页面的编辑", type: 'todo'},
      {id: 6, title:	"双人主页的编辑", type: 'todo'},
      {id: 7, title: "博客列表", type: 'todo'},
      {id: 8, title:	"博客内容分类 或 日期分类", type: 'todo'},
      {id: 9, title: "博客正文", type: 'todo'},
      {id: 10, title: "博客留言", type: 'todo'},
      {id: 11, title: "发表博客", type: 'todo'},
      {id: 12, title: "照片墙 照片album列表", type: 'todo'},
      {id: 13, title: "浏览照片", type: 'todo'},
      {id: 14, title: "单张照片", type: 'todo'},
      {id: 15, title: "说说 - 展示与更新", type: 'todo'},
      {id: 16, title: "音乐播放器", type: 'todo'},
      {id: 17, title: "404页面使用flappy bird", type: 'todo'},
      {id: 18, title: "TODO", type: 'todo'},
    ],
  }
  return dispatch => {
    Request.getTodoList().then(resp => {
      dispatch(setTodo(resp.data));
    }, error => {
      dispatch(setTodo(data));
    })
  }
}
