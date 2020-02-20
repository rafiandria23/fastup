'use strict';

const roomRouter = require('express').Router();
const RoomController = require('../controllers/room');

roomRouter.get('/', RoomController.findAll);
roomRouter.post('/', RoomController.create);
roomRouter.get('/:id', RoomController.findOne);
roomRouter.delete('/:id', RoomController.destroy);

module.exports = roomRouter;
