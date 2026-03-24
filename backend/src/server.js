require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { pool } = require('./db');

const app = express();
const port = Number(process.env.PORT || 5000);

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

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend running on port ${port}`);
});
