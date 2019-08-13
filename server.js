const ioc = require('socket.io-client');
const server = require('http').createServer();
const io = require('socket.io')('8081', {
  serveClient: false,
});

const client = ioc('http://localhost:8080/my-namespace');

io.of('/my-namespace').on('connection', (socket) => {
  socket.on('subscribeToTimer', (interval) => {
    setInterval(() => {
      socket.emit('timer', new Date());
    }, interval);
  });
});

io.of('/my-namespace').on('connection', (socket) => {
  socket.on('addNumber', (number) => {
    socket.emit('addedNumber', number);
    client.emit('client', number);
    socket.broadcast.emit('addedNumber', number);
  });
});

io.of('/my-namespace').on('connection', (socket) => {
  socket.on('client', num => console.log(num));
});
