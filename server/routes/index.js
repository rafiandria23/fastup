'use strict';

const indexRouter = require('express').Router();
const playerRouter = require('./player');
const roomRouter = require('./room');

indexRouter.use('/players', playerRouter);
indexRouter.use('/rooms', roomRouter);

module.exports = indexRouter;
