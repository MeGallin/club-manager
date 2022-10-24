require('dotenv').config({ path: './config.env' });
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const cors = require('cors');

// Connect DB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/', require('./routes/adminRoutes'));
app.use('/api/', require('./routes/AdminProfileRoutes'));
app.use('/api/', require('./routes/confirmEmailRoute'));
app.use('/api/', require('./routes/profileRoutes'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/auth/private', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));

// Error Handlers NB should be last piece of middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`),
);

process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged error: ${err}`);
  server.close(() => process.exit(1));
});
