import io from 'socket.io-client'

let socket;

let SOCKETIO = {
  connect() {
    socket = io.connect('http://localhost:9521')
    this.setSocket();
  },
  setSocket() {
    socket.on('open', (resp) => {
      console.log('socket connected!');
      console.log(resp);
    })
    socket.on('message', resp => {
      console.log(resp);
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
