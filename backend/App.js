// This file sets up the Express.js server and configures middleware, routes, and error handling

const express = require('express');
const connectDB = require('./config/Db');
const errorHandler = require('./utils/ErrorHandler');
const authRoutes = require('./routes/AuthRoutes');
const quizRoutes = require('./routes/QuizRoutes');
const participantRoutes = require('./routes/ParticipantRoutes');

const PORT = process.env.PORT || 3000;


// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', quizRoutes);
app.use('/api', participantRoutes);

// Error handling middleware
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

module.exports = app;

