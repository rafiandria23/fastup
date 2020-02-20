"use strict";

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

io.on('connect', (socket) => {
  console.log(`Socket is connected!`);
});

server.listen(port, () => {
  console.log(`Cepetin Mas API is running on PORT ${port}!`);
});
