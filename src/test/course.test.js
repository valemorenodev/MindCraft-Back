import request from 'supertest';
import app from '../src/app.js';
import { Course } from '../src/models/course.model.js';

describe('Courses API', () => {
  it('should create a course', async () => {
    const res = await request(app)
      .post('/api/courses')
      .send({
        title: 'Angular Basics',
        description: 'Intro to Angular',
        area: 'Frontend'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Angular Basics');
  });

  it('should get all courses', async () => {
    await Course.create({
      title: 'Node.js',
      description: 'Backend',
      area: 'Backend'
    });

    const res = await request(app).get('/api/courses');

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });
});