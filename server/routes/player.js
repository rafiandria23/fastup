'use strict';

const playerRouter = require('express').Router();
const PlayerController = require('../controllers/player');
playerRouter.post('/', PlayerController.login);
playerRouter.put('/:id', PlayerController.updatePlayer);
playerRouter.post('/addscore', PlayerController.addScore);

module.exports = playerRouter;