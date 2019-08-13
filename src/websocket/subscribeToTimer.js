import io from 'socket.io-client';

// const socket = io('https://express.npapps.paas.bip.jp.fid-intl.com/my-namespace');
const socket = io('http://localhost:8081/my-namespace');

// function subscribeToTimer(cb) {
//   socket.on('timer', timestamp => cb(null, timestamp));
//   socket.emit('subscribeToTimer', 1000);
// }

function addNumber_on(fn) {
  socket.on('addedNumber', num => fn(num));
}

function addNumber_emit(number = 0) {
  socket.emit('addNumber', number);
}

export {addNumber_on, addNumber_emit};
