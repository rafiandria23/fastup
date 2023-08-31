'use strict';

const router = require('express').Router();

// Controllers
const RoomController = require('../controllers/room');

router.get('/', RoomController.getRooms);
router.post('/', RoomController.createRoom);
router.get('/:id', RoomController.getRoom);
router.delete('/:id', RoomController.deleteRoom);

module.exports = router;
