'use strict';

const {Room} = require('../models');

class RoomController {
  static create(req, res, next) {
    const {name, level} = req.body;
    Room.create({name, level})
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        next(err);
      });
  }

  static destroy(req, res, next) {
    const {id} = req.body;
    Room.destroy({where: {id}})
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = RoomController;