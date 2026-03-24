const express = require('express');
require('./config/env');
const cors = require('cors');
const helmet = require('helmet');
const { pool } = require('./db');

const app = express();
const port = Number(process.env.PORT || 5000);

const formatDbError = (error) => {
  if (!error) return 'Unknown database error';
  if (error.message) return error.message;
  if (Array.isArray(error.errors) && error.errors.length > 0) {
    return error.errors.map((err) => err.message).join('; ');
  }
  if (Array.isArray(error.cause?.errors) && error.cause.errors.length > 0) {
    return error.cause.errors.map((err) => err.message).join('; ');
  }
  return String(error);
};

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1');
    res.status(200).json({
      status: 'ok',
      service: 'salon-system-backend',
      database: 'connected',
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      service: 'salon-system-backend',
      database: 'disconnected',
      message: error.message,
    });
  }
});

app.get('/api/v1/services', (_req, res) => {
  res.status(200).json({
    message: 'Services endpoint ready.',
    data: [],
  });
});

const startServer = async () => {
  try {
    await pool.query('SELECT 1');
    // eslint-disable-next-line no-console
    console.log('Database connection successful.');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to connect to database:', formatDbError(error));
  }

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Backend running on port ${port}`);
  });
};

startServer();
