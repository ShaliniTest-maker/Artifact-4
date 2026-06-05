const request = require('supertest');
const app = require('../app');

describe('Artifact-4 Express server HTTP contract', () => {
  describe('GET / (existing "Hello world" route)', () => {
    it('responds with 200 and the exact body "Hello world"', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe('Hello world');
    });
  });

  describe('GET /good-evening (new "Good evening" route)', () => {
    it('responds with 200 and the exact body "Good evening"', async () => {
      const res = await request(app).get('/good-evening');
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe('Good evening');
    });
  });

  describe('Unknown route (Express default not-found)', () => {
    it('responds with 404 for an unregistered GET path', async () => {
      const res = await request(app).get('/this-route-does-not-exist');
      expect(res.statusCode).toBe(404);
    });
  });

  describe('Application bootstrap', () => {
    it('exports a defined, callable Express app', () => {
      expect(app).toBeDefined();
      expect(typeof app).toBe('function');
    });
  });
});
