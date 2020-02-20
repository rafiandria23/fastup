'use strict';

module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize;

  class Player extends Model {}

  Player.init({
    name: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {sequelize});

  Player.associate = function(models) {
    // associations can be defined here
  };
  
  return Player;
};