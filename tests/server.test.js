const server = require('../src/server');

describe('Testing the server', () => {
  it('Should be set up to respond with a pong on path ping with a GET request', (done) => {
    server.inject('/ping', (result) => {
      expect(result.result).toBe('pong');
      expect(result.statusCode).toBe(200);
      done();
    });
  });
});
