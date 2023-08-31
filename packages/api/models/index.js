'use strict';

const { NODE_ENV = 'development' } = process.env;

const { Sequelize } = require('sequelize');

// Sequelize Configs
const config = require('../config/config');

// Models
const Player = require('./player');
const Room = require('./room');
const PlayerRoom = require('./player-room');

const sequelize = new Sequelize({
  ...config[NODE_ENV],
});

// Sequelize Exports
exports.Sequelize = Sequelize;
exports.sequelize = sequelize;

// Model Inits
Player.init(sequelize);
Room.init(sequelize);
PlayerRoom.init(sequelize);

// Model Exports
exports.Player = Player;
exports.Room = Room;
exports.PlayerRoom = PlayerRoom;
