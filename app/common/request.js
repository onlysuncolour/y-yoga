import Ajax from './ajax'
module.exports = {
  Todo: {
    getTodoList () {
      return Ajax.get('/todo/getlist');
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
