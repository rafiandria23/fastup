'use strict';

const roomRouter = require('express').Router();
const RoomController = require('../controllers/room');

roomRouter.post('/', RoomController.create);
roomRouter.delete('/:id', RoomController.destroy);

module.exports = roomRouter;
