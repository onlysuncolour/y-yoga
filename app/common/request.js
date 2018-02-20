import Ajax from './ajax'
module.exports = {
  Todo: {
    getTodoList () {
      return Ajax.get('/todo/getlist');
    },
    create(param) {
      return Ajax.post('/todo/create', param)
    },
    update(param) {
      return Ajax.post('/todo/update', param)
    }
  },
  Game: {
    LostCity: {
      joinGame() {
        return Ajax.post('/game/lostCity/joinGame')
      }
    }
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
  }
}
