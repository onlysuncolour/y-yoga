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
    socket.on()
  },
  emit(eventName, eventData) {
    socket.emit(eventName, eventData);
  },
  joinGame(name, room) {
    socket.emit('joinGameRoom', {room: name+'_'+room})
  },
  sendGameMessage(message) {
    socket.emit('game-message', message)
  }
}

module.exports = SOCKETIO
