'use strict';

const createError = require('http-errors');

// Utils
const { verifyToken } = require('../utils/jwt');

exports.validateJWT = (req, _, next) => {
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
};
