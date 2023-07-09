const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  participantId: {
    type: String,
    required: true,
  },
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true,
  },
  score: {
    type: Number,
    default: 0,
  },
});

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
