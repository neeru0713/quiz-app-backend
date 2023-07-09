const Quiz = require('../models/Quiz');

// Create a quiz
const createQuiz = async (req, res) => {
  try {
    // Extract the quiz data from the request body
    const { title, questions } = req.body;

    // Create the quiz
    const quiz = await Quiz.create({ title, questions });

    res.status(201).json({ quiz });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create the quiz' });
  }
};

// Get a quiz by ID
const getQuizById = async (req, res) => {
  try {
    const { quizId } = req.params;

    // Retrieve the quiz from the database
    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    res.status(200).json({ quiz });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve the quiz' });
  }
};

module.exports = { createQuiz, getQuizById };
