const request = require('supertest');
const app = require('../App');
const Participant = require('../models/Participant');

describe('Participant API endpoints', () => {
  before(async () => {
    // Create a sample participant for testing
    const participantData = {
      participantId: 'participant1',
      quizId: '5ecba3f53dbb1935a4ef3210', // Replace with a valid quiz ID
      answers: [
        { questionId: '5ecba40f3dbb1935a4ef3211', selectedOption: '5ecba42a3dbb1935a4ef3213' },
      ],
    };

    await Participant.create(participantData);
  });

  after(async () => {
    // Clean up the database after testing
    await Participant.deleteMany();
  });

  it('should participate in a quiz', async () => {
    const quizId = '5ecba3f53dbb1935a4ef3210'; // Replace with a valid quiz ID
    const participantId = 'participant2';

    const participationData = {
      participantId,
      answers: [
        { questionId: '5ecba40f3dbb1935a4ef3211', selectedOption: '5ecba42a3dbb1935a4ef3214' },
      ],
    };

    await request(app)
      .post(`/api/quizzes/${quizId}/participate`)
      .send(participationData)
      .expect(200);
  });

  it('should get participant scores for a quiz', async () => {
    const quizId = '5ecba3f53dbb1935a4ef3210'; // Replace with a valid quiz ID

    const response = await request(app)
      .get(`/api/quizzes/${quizId}/participants`)
      .expect(200);

    const { participants } = response.body;
    assert.isArray(participants);
    assert.isAbove(participants.length, 0);
  });
});
