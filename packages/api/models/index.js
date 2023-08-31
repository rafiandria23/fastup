'use strict';

const { NODE_ENV = 'development' } = process.env;

const _ = require('lodash');
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

const models = {
  Player,
  Room,
  PlayerRoom,
};

// Sequelize Exports
exports.Sequelize = Sequelize;
exports.sequelize = sequelize;

// Model Inits
for (const modelKey in models) {
  models[modelKey].init(sequelize);
}

// Model Associations
for (const modelKey in models) {
  const associate = _.get(models, `${modelKey}.associate`, null);

  if (associate) {
    associate(models);
  }
}

// Model Exports
module.exports = models;
