import Ajax from './ajax'
module.exports = {
  Todo: {
    getTodoList () {
      return Ajax.get('/todo/getlist');
    },
    create() {
      return Ajax.post('todo/create')
    }
  },
  Game: {
    LostCity: {
      joinGame() {
        return Ajax.post('/game/lostCity/joinGame')
      }
    }
  }
}
