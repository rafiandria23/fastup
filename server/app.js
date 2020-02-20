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
