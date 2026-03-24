const path = require('path');
const dotenv = require('dotenv');

// Always resolve .env from backend root, regardless of cwd.
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
