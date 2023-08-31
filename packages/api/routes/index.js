'use strict';

const router = require('express').Router();

// Routers
const player = require('./player');
const room = require('./room');

// Middlewares
const { validateJWT } = require('../middlewares/auth');

router.use('/players', player);
// router.use(validateJWT);
router.use('/rooms', room);

module.exports = router;
