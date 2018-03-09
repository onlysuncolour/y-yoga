import Ajax from './ajax'
module.exports = {
  Todo: {
    getTodoList () {
      return Ajax.get('/todo/getlist');
    },
    create(param) {
      return Ajax.post('/todo/save', param)
    },
    update(param) {
      return Ajax.post('/todo/save', param)
    },
    updateSQL() {
      return Ajax.get('/todo/updateSQL')
    },
  },
  Game: {
    LostCity: {
      joinGame() {
        return Ajax.post('/game/lostCity/joinGame')
      },
    },
  },
  User: {
    login(param) {
      return Ajax.post('/user/login', param)
    },
    me() {
      return Ajax.get('/user/me')
    },
    register(param) {
      return Ajax.post('/user/register', param)
    },
    logout() {
      return Ajax.get('/user/logout')
    },
  },
  Blog: {
    getBlogCategory (param) {
      return Ajax.post('/blog/category', param)
    },
    getBlogList(param) {
      return Ajax.post('/blog/list', param)
    },
    getHotBlogList() {
      return Ajax.get('/blog/hotlist')
    },
    getBlog(id) {
      return Ajax.get(`/blog/blog/${id}`)
    },
    saveBlog(param) {
      return Ajax.post('/blog/save', param)
    },
    updateSQL() {
      return Ajax.get('/blog/updateSQL')
    },
  },
}
