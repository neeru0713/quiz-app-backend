// This file contains the error handler function

// Error handler middleware
const errorHandler = (err, req, res, next) => {
    console.error(err);
  
    // Set default error status and message
    let statusCode = 500;
    let message = 'Internal Server Error';
  
    // Check for specific error status and message
    if (err.status) {
      statusCode = err.status;
    }
  
    if (err.message) {
      message = err.message;
    }
  
    res.status(statusCode).json({ error: message });
  };
  
  module.exports = errorHandler;
  