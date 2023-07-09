// This file contains utility functions for formatting data

// Format quiz data
const formatQuizData = (quiz) => {
    const formattedQuiz = {
      id: quiz._id,
      title: quiz.title,
      questions: quiz.questions.map((question) => ({
        id: question._id,
        text: question.text,
        options: question.options.map((option) => ({
          id: option._id,
          text: option.text,
        })),
      })),
    };
  
    return formattedQuiz;
  };
  
  module.exports = { formatQuizData };
  