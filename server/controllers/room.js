'use strict';

const {Room, Player} = require('../models');

class RoomController {
  static create(req, res, next) {
    const {name, level} = req.body;
    const PlayerId = req.player.id;
    Room.create({name, level, PlayerId})
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        next(err);
      });
  }

  static findAll(req, res, next) {
    Room.findAll({include: [{model: Player}]})
      .then(result => {
        if (result.length == 0) {
          res.status(200).json({message: 'No rooms found!'});
        }
        res.status(200).json({rooms: result});
      })
      .catch(err => {
        console.log(err);
        next(err);
      });
  }

  static findOne(req, res, next) {
    const RoomId = req.params.id;
    const PlayerId = req.player.id;
    Room.findOne({where: {id: RoomId, PlayerId}})
      .then(result => {
        if (result) {
          res.status(200).json({room: result});
        } else {
          res.status(200).json({message: 'Room not found!'});
        }
      })
      .catch(err => {
        next(err);
      });
  }

  static destroy(req, res, next) {
    const RoomId = req.params.id;
    Room.destroy({where: {id: RoomId}})
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = RoomController;