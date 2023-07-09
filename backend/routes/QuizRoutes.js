const express = require('express');
const router = express.Router();
const quizController = require('../controllers/QuizController');

// Create a quiz
router.post('/', quizController.createQuiz);

// Get a quiz by ID
router.get('/:quizId', quizController.getQuizById);

module.exports = router;
