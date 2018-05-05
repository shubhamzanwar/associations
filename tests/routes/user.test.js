const server = require('../../src/server');
const Models = require('../../models');


describe('The users PUT route', () => {
  beforeAll((done) => {
    const testDish = {
      id: 1,
      name: 'test dish',
      dishType: 'Test Type',
      chef: 'Test chef',
    };
    Models.dishes.create(testDish).then(() => done());
  });
  afterAll((done) => {
    Models.dishes.destroy({
      truncate: true,
      cascade: true,
    }).then(done);
  });

  test('The route should return a 200 when the user is successfully created', (done) => {
    const user = {
      name: 'Test user',
      dishId: 1,
    };
    const options = {
      url: '/user',
      method: 'PUT',
      payload: user,
    };
    server.inject(options, (result) => {
      expect(result.statusCode).toBe(200);
      expect(result.result).toEqual(user);
      done();
    });
  });
  test('The route should fail when the users dishId doesnt exist', (done) => {
    const user = {
      name: 'Test user',
      dishId: 2,
    };
    const options = {
      url: '/user',
      method: 'PUT',
      payload: user,
    };
    server.inject(options, (result) => {
      expect(result.statusCode).toBe(500);
      expect(result.result).toEqual('could not enter');
      done();
    });
  });
});

describe('The user GET route', () => {
  beforeAll((done) => {
    const dish = {
      id: 1,
      name: 'test dish',
      dishType: 'Test Type',
      chef: 'Test chef',
    };
    const user = {
      name: 'Shubham',
      dishId: 1,
    };
    Models.dishes.create(dish)
      .then(() => Models.users.create(user).then(() => done()));
  });
  afterAll((done) => {
    Models.dishes.destroy({
      truncate: true,
      cascade: true,
    })
      .then(done);
  });

  test('The route should return the user with the dish attached', (done) => {
    const name = 'Shubham';
    const expectedResult = {
      name: 'Shubham',
      dish: {
        name: 'test dish',
        dishType: 'Test Type',
        chef: 'Test chef',
      },
    };
    server.inject(`/user?name=${name}`, (result) => {
      expect(result.statusCode).toBe(200);
      expect(result.result).toEqual(expectedResult);
      done();
    });
  });
});
