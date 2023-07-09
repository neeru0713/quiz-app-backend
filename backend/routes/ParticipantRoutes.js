const express = require('express');
const router = express.Router();
const participantController = require('../controllers/ParticipantController');

// Participate in a quiz
router.post('/:quizId/participate', participantController.participateInQuiz);

// Get participant scores for a quiz
router.get('/:quizId/participants', participantController.getParticipantScores);

module.exports = router;
