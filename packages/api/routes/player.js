'use strict';

const router = require('express').Router();

// Controllers
const PlayerController = require('../controllers/player');

router.post('/', PlayerController.signIn);
router.put('/:id', PlayerController.updatePlayer);
router.post('/addscore', PlayerController.addScore);

module.exports = router;
