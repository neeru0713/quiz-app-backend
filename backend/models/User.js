// This file contains the User model

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // User schema definition
});

const User = mongoose.model('User', userSchema);

module.exports = User;
