const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  participantId: {
    type: String,
    required: true,
  },
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true,
  },
  answers: [
    {
      questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
      },
      selectedOption: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Option',
      },
    },
  ],
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;
