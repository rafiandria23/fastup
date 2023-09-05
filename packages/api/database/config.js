require('dotenv').config();

const dialect = 'postgres';

const defaultConfig = {
  dialect,
  host: process.env.DB_HOST || '127.0.0.1',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME || 'fastup',
}

module.exports = {
  development: defaultConfig,
  test: defaultConfig,
  production: defaultConfig,
};
