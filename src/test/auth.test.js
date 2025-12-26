import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../src/app.js';
import { User } from '../src/models/user.model.js';

describe('Auth - Login', () => {
  it('should login successfully with valid credentials', async () => {
    const password = await bcrypt.hash('123456', 10);

    await User.create({
      name: 'Valentina',
      email: 'vale@test.com',
      password
    });

    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'vale@test.com',
        password: '123456'
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
    expect(res.body.user.email).toBe('vale@test.com');
  });

  it('should fail with wrong password', async () => {
    const password = await bcrypt.hash('123456', 10);

    await User.create({
      name: 'Vale',
      email: 'fail@test.com',
      password
    });

    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'fail@test.com',
        password: 'wrong'
      });

    expect(res.statusCode).toBe(401);
  });
});
