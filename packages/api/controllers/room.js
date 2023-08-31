'use strict';

// Models
const { Room, Player } = require('../models');

class RoomController {
  static async createRoom(req, res) {
    const { name } = req.body;

    const newRoom = await Room.create({
      name,
    });

    res.send(newRoom);
  }

  static async getRooms(_, res) {
    const rooms = await Room.findAll({
      include: [
        {
          model: Player,
        },
      ],
    });

    res.send({
      rooms,
    });
  }

  static async getRoom(req, res, next) {
    const { id: room_id } = req.params;
    const { id: player_id } = req.player;

    const room = await Room.findOne({
      where: {
        id: room_id,
        player_id,
      },
    });

    if (!room) {
      return next(new Error('Room not found!'));
    }

    res.send({
      room,
    });
  }

  static async deleteRoom(req, res, next) {
    const { id: room_id } = req.params;

    await Room.destroy({
      where: {
        id: room_id,
      },
    });

    res.send({
      message: 'Success!',
    });
  }
}

module.exports = RoomController;
