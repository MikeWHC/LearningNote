/* eslint-disable */
const express = require('express');
const app = express();
let port = process.env.PORT || 3001;

const server = app.listen(port, function () {
  console.log('server running on port ' + port);
});

const io = require('socket.io')(server);

io.on('connection', function (socket) {
  console.log(socket.id)
  socket.on('SEND_MESSAGE', function (data) {
    io.emit('MESSAGE', data)
  });
});