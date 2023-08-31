'use strict';

require('dotenv').config();

const { PORT = 3000 } = process.env;

const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Router
const router = require('./routes');

// Middlewares
const { handleError } = require('./middlewares/error');

app.use(cors());
app.use(express.json());

app.use((req, _, next) => {
  req.io = io;
  next();
});

app.use('/api', router);
app.use('*', (_, __, next) => {
  next({
    message: 'Not found!',
  });
});
app.use(handleError);

io.on('connection', (client) => {
  client.on('rooms.get', () => {
    io.emit('rooms.get');
  });

  client.on('room.update', () => {
    io.emit('room.update');
  });

  client.on('sentence.next', () => {
    io.emit('sentence.next');
  });

  client.on('game.start', () => {
    io.emit('game.start');
  });

  client.on('game.finished', () => {
    io.emit('game.finished');
  });
});

server.listen(PORT, () => {
  console.info(`FastUp API is running on PORT ${PORT}`);
});
