'use strict';

module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize;

  class Room extends Model {}

  Room.init({
    name: DataTypes.STRING,
    level: DataTypes.STRING
  }, {sequelize});

  Room.associate = function(models) {
    // associations can be defined here
  };
  
  return Room;
};