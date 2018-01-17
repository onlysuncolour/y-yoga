const loginStatus = (state = {isLogin: false, userInfo: {}}, action) => {
  switch(action.type) {
    case 'login':
      return {
        isLogin: true,
        userInfo: action.userInfo
      }
    case 'logout':
      return {
        isLogin: false,
        userInfo: {}
      }
    default:
      return state;
  }
}

module.exports = {loginStatus}
