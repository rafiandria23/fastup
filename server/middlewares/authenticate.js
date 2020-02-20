'use strict';

const verifyToken = require('../helpers/verify-token');
const createError = require('http-errors');

module.exports = (req, res, next) => {
  try {
    if (verifyToken(req.headers.token)) {
      req.player = verifyToken(req.headers.token);
      next();
    } else {
      throw createError(400, 'Invalid token!');
    }
  } catch (err) {
    next(err);
  }
}