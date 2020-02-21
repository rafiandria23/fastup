'use strict';

const { Player } = require('../models');
const generateToken = require('../helpers/generate-token');

class PlayerController {
  static login(req, res, next) {
    const { name } = req.body;
    Player.findOne({ where: { name: name } })
      .then(result => {
        if (result) {
          return result
        } else {
          return Player.create({ name })
        }
      })
      // .then(({id, name, score}) => {
      //   const token = generateToken({id, name, score});
      //   res.status(200).json({token, player: {id, name, score}});
      //     return Player.create({ name });
      // })
      .then(createdPlayer => {
        console.log(createdPlayer)
        const { id, name, score } = createdPlayer;
        const token = generateToken({ id, name, score });
        res.status(200).json({ token, player: createdPlayer });
      })
      .catch(err => {
        console.log(err)
        next(err);
      });
  }
  static updatePlayer(req, res, next) {
    const { id } = req.params;
    Player.update({ RoomId: req.body.RoomId }, { where: { id } })
      .then(result => {
        console.log(result)
        res.status(200).json({ message: 'berhasil masuk room' })
      })
      .catch(err => {
        console.log(err)
        next(err);
      });
  }

  static addScore(req, res, next) {
    const playerData = {
      name: req.body.name,
      score: req.body.score
    };
    let currentScore = null;
    Player.findOne({ where: { name: playerData.name } })
      .then(foundPlayer => {
        currentScore = foundPlayer.score;
        return Player.update({ score: Number(playerData.score) + currentScore }, { where: { name: playerData.name } });
      })
      .then(result => {
        return res.status(200).json({ result: { name: playerData.name, score: Number(playerData.score) + currentScore } });
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = PlayerController;