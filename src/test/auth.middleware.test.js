import request from 'supertest';
import jwt from 'jsonwebtoken';
import app from '../src/app.js';

describe('Auth Middleware', () => {
  it('should deny access without token', async () => {
    const res = await request(app).get('/api/profile');

    expect(res.statusCode).toBe(401);
  });

  it('should deny access with invalid token', async () => {
    const res = await request(app)
      .get('/api/profile')
      .set('Authorization', 'Bearer invalidtoken');

    expect(res.statusCode).toBe(401);
  });

  it('should allow access with valid token', async () => {
    const token = jwt.sign(
      { id: '123' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    const res = await request(app)
      .get('/api/profile')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.userId).toBe('123');
  });
});