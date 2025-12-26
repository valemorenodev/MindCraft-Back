import request from 'supertest';
import app from '../src/app.js';
import { User } from '../src/models/user.model.js';
import { Course } from '../src/models/course.model.js';

describe('Progress API', () => {
  it('should create progress for a user', async () => {
    const user = await User.create({
      name: 'Vale',
      email: 'progress@test.com',
      password: '123'
    });

    const course = await Course.create({
      title: 'React',
      description: 'Hooks',
      area: 'Frontend'
    });

    const res = await request(app)
      .post('/api/progress')
      .send({
        user: user._id,
        course: course._id,
        percent: 50
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.percent).toBe(50);
  });
});