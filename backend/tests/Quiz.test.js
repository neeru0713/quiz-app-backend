const request = require('supertest');
const app = require('../App');
const Quiz = require('../models/Quiz');

describe('Quiz API endpoints', () => {
  before(async () => {
    // Create a sample quiz for testing
    const quizData = {
      title: 'Sample Quiz',
      questions: [
        {
          text: 'Question 1',
          options: [
            { text: 'Option 1', isCorrect: true },
            { text: 'Option 2', isCorrect: false },
          ],
        },
      ],
    };

    await Quiz.create(quizData);
  });

  after(async () => {
    // Clean up the database after testing
    await Quiz.deleteMany();
  });

  it('should create a new quiz', async () => {
    const newQuizData = {
      title: 'New Quiz',
      questions: [
        {
          text: 'Question 1',
          options: [
            { text: 'Option 1', isCorrect: true },
            { text: 'Option 2', isCorrect: false },
          ],
        },
      ],
    };

    const response = await request(app)
      .post('/api/quizzes')
      .send(newQuizData)
      .expect(201);

    const { quiz } = response.body;
    assert.strictEqual(quiz.title, newQuizData.title);
    assert.strictEqual(quiz.questions.length, newQuizData.questions.length);
  });

  it('should get a quiz by ID', async () => {
    const quiz = await Quiz.findOne({ title: 'Sample Quiz' });

    const response = await request(app)
      .get(`/api/quizzes/${quiz._id}`)
      .expect(200);

    const { quiz: fetchedQuiz } = response.body;
    assert.strictEqual(fetchedQuiz.title, quiz.title);
    assert.strictEqual(fetchedQuiz.questions.length, quiz.questions.length);
  });
});
