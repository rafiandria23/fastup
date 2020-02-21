"use strict";

if (process.env.NODE_ENV == 'development') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const indexRouter = require('./routes');
const errorHandler = require('./middlewares/error-handler');

io.on('connection', client => {
  // Standby cek apakah ada user yang mengirimkan / emit
  console.log("connect socket...");
  client.on('get_rooms', () => {
    console.log("server pocked and emit to all connected clients");
    io.emit('get_rooms');
  })
  client.on('disconnect', () => { 

  });
});

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// socket.io
// io.on('connect', (socket) => {
//   console.log(`Socket is connected!`);
// });
app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use('/api', indexRouter);
app.use(errorHandler);

server.listen(port, () => {
  console.log(`Cepetin Mas API is running on PORT ${port}!`);
});
