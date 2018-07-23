import Ajax from './ajax'
module.exports = {
  Common: {
    qiniuToken(param) {
      return Ajax.post('/qiniu/token', param)
    },
    addFile(param) {
      return Ajax.post('/qiniu/addFile', param)
    }
  },
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
    deleteOne(param) {
      return Ajax.post('/todo/deleteOne', param)
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
    getBlogRemark(id) {
      
    }
  },
  Keywords: {
    getUsInfo(keyword) {
      return Ajax.get(`/keywords/us`, {keyword})
    },
    getYoungCircle() {
      return Ajax.get(`/keywords/youngCircle`)
    }
  },
  Photo: {
    albumList(param) {
      return Ajax.get('/album/list', param)
    },
    getAlbum(id) {
      return Ajax.get(`/album/getOne`, {id})
    },
    saveAlbum(param) {
      return Ajax.post('/album/save', param)
    },
    listPhoto(param) {
      return Ajax.get('/photo/list', param)
    },
    savePhoto(param) {
      return Ajax.post('/photo/save', param)
    },
  }
}
