const request = require('supertest');
const app = require('../App');

describe('Authentication API endpoints', () => {
  it('should register a new user', async () => {
    const userData = {
      username: 'testuser',
      password: 'testpassword',
    };

    const response = await request(app)
      .post('/api/auth/register')
      .send(userData)
      .expect(201);

    const { user } = response.body;
    assert.strictEqual(user.username, userData.username);
  });

  it('should login a user', async () => {
    const userData = {
      username: 'testuser',
      password: 'testpassword',
    };

    await request(app)
      .post('/api/auth/login')
      .send(userData)
      .expect(200);
  });
});
