import io from 'socket.io-client'

let socket;

let SOCKETIO = {
  connect(token) {
    let socketUrl = `http://localhost:9521?token=${token}`
    socket = io(socketUrl)
    this.setSocket();
  },
  disconnect() {
    socket.disconnect();
    socket = undefined;
  },
  setSocket() {
    socket.on('connect', () => {
      console.log('connect', socket.id);
    })
    socket.on('open', (resp) => {

    })
    socket.on('message', resp => {
      console.log(resp);
    })
    socket.on('game-message', data => {
      G.trigger('game-message', data)
    })
  },
  emit(eventName, eventData) {
    socket.emit(eventName, eventData);
  },
  joinGame(room) {
    socket.emit('joinGameRoom', {room: room})
  },
  sendGameMessage(message) {
    socket.emit('game-message', message)
  }
}

module.exports = SOCKETIO
