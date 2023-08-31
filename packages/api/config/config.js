'use strict';

require('dotenv').config();

const dialect = 'postgres';

const {
  DB_HOST = '127.0.0.1',
  DB_PORT = 5432,
  DB_USER,
  DB_PASS,
  DB_NAME = 'fastup',
} = process.env;

module.exports = {
  development: {
    dialect,
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
  },
  production: {
    dialect,
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
  },
};
