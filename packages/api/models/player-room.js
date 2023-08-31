'use strict';

const { Model, DataTypes, UUIDV4 } = require('sequelize');

class PlayerRoom extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: UUIDV4,
        },
        room_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        player_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        score: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        updated_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        deleted_at: {
          type: DataTypes.DATE,
        },
      },
      {
        sequelize,
        modelName: 'PlayerRoom',
        tableName: 'player_rooms',
        underscored: true,
        timestamps: true,
        paranoid: true,
        createdAt: 'created_at',
        updatedAt: 'created_at',
        deletedAt: 'deleted_at',
      },
    );
  }
}

module.exports = PlayerRoom;
