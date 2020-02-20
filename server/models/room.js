'use strict';

module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize;

  class Room extends Model {}

  Room.init({
    name: DataTypes.STRING,
    level: DataTypes.STRING,
    PlayerId: DataTypes.INTEGER
  }, {sequelize});

  Room.associate = function(models) {
    // associations can be defined here
    Room.belongsToMany(models.Player, {through: 'PlayerRoom'});
    // Room.hasMany(models.Player, {through: 'PlayerRoom'});
  };
  
  return Room;
};