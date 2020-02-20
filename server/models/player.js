'use strict';

module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize;

  class Player extends Model {}

  Player.init({
    name: {
      type: DataTypes.STRING
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {sequelize});

  Player.associate = function(models) {
    // associations can be defined here
  };
  
  return Player;
};