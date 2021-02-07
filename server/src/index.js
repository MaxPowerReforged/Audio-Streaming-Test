const app = require('express')();
const static = require('express-static');
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(static(__dirname + '/public'));

io.on('connection', (socket) => {
  socket.broadcast.emit('hi');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

http.listen(4000, () => {
  console.log('listening on *:4000');
});
