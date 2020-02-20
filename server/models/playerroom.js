'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize;

  class PlayerRoom extends Model {}

  PlayerRoom.init({
    RoomId: DataTypes.INTEGER,
    PlayerId: DataTypes.INTEGER
  }, {sequelize})

  PlayerRoom.associate = function(models) {
    // associations can be defined here
    // PlayerRoom.belongsToMany(models.Player);
    // PlayerRoom.belongsToMany(models.Room);
  };
  return PlayerRoom;
};