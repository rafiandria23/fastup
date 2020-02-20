'use strict';

if (process.env.NODE_ENV == 'development') {
  require('dotenv').config();
}

const jwt = require('jsonwebtoken');

module.exports = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
}
