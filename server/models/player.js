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
    },
    RoomId: {
      type: DataTypes.INTEGER
    }
  }, {sequelize});

  Player.associate = function(models) {
    Player.belongsTo(models.Room);
  };
  
  return Player;
};