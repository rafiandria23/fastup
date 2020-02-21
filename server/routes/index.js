'use strict';

const indexRouter = require('express').Router();
const playerRouter = require('./player');
const roomRouter = require('./room');
const authenticate = require('../middlewares/authenticate');

indexRouter.use('/players', playerRouter);
// indexRouter.use(authenticate);
indexRouter.use('/rooms', roomRouter);

module.exports = indexRouter;
