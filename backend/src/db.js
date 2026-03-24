const { Pool } = require('pg');
require('./config/env');

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 5432),
  database: process.env.DB_NAME || 'salon_db',
  user: process.env.DB_USER || 'salon_user',
  password: process.env.DB_PASSWORD || 'salon_password',
});

module.exports = { pool };
