'use strict';

// Models
const { Player } = require('../models');

// Utils
const { generateToken } = require('../utils/jwt');

class PlayerController {
  static async signIn(req, res) {
    const { name } = req.body;

    const player = await Player.findOne({
      where: {
        name,
      },
    });

    if (player) {
      return res.send({
        player
      });
    }

    const newPlayer = await Player.create({
      name,
    });

    const { id, score } = newPlayer;
    const token = generateToken({ id, name, score });

    res.send({ token, player: newPlayer });
  }

  static async updatePlayer(req, res) {
    const { id } = req.params;

    await Player.update(
      {
        room_id: req.body.room_id,
      },
      {
        where: {
          id,
        },
      },
    );

    res.send({
      message: 'Success!',
    });
  }

  static async addScore(req, res, next) {
    const { name, score } = req.body;

    const player = await Player.findOne({
      where: {
        name,
      },
    });

    if (!player) {
      return next(new Error('Player not found!'));
    }

    const updatedScore = player.score + score;

    await player.update({
      score: updatedScore,
    });

    res.send({
      name: player.name,
      score: updatedScore,
    });
  }
}

module.exports = PlayerController;
