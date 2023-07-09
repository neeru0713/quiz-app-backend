const Participant = require('../models/Participant');

// Participate in a quiz
const participateInQuiz = async (req, res) => {
  try {
    const { quizId } = req.params;
    const { participantId, answers } = req.body;

    // Create or update the participant's answers for the quiz
    await Participant.findOneAndUpdate(
      { participantId, quizId },
      { answers },
      { upsert: true }
    );

    res.status(200).json({ message: 'Participation recorded' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to participate in the quiz' });
  }
};

// Get participant scores for a quiz
const getParticipantScores = async (req, res) => {
  try {
    const { quizId } = req.params;

    // Retrieve all participants and their scores for the quiz
    const participants = await Participant.find({ quizId });

    res.status(200).json({ participants });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve participant scores' });
  }
};

module.exports = { participateInQuiz, getParticipantScores };
