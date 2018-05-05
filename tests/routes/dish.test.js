const server = require('../../src/server');
const Models = require('../../models');


describe('The dihs post route', () => {
  beforeEach((done) => {
    Models.dishes.destroy({
      cascade: true,
      truncate: true,
    }).then(done);
  });
  test('Should respond with a 200 when valid details are sent', (done) => {
    const testDish = {
      name: 'test dish',
      dishType: 'Test Type',
      chef: 'Test chef',
    };
    const options = {
      url: '/dish',
      method: 'PUT',
      payload: testDish,
    };
    server.inject(options, (result) => {
      expect(result.statusCode).toBe(200);
      expect(result.result).toEqual(testDish);
      done();
    });
  });
  test('Should return a 500 error when the details are invalid', (done) => {
    const invalidDish = {
      id: 'invalid ID',
      name: 'invalid dish',
    };
    const options = {
      url: '/dish',
      method: 'PUT',
      payload: invalidDish,
    };
    server.inject(options, (result) => {
      expect(result.statusCode).toBe(500);
      expect(result.result).toEqual('could not enter');
      done();
    });
  });
});
