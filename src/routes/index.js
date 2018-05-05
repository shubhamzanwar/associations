const dish = require('./dish');
const user = require('./user');

module.exports = [
  {
    path: '/ping',
    method: 'GET',
    handler: (request, response) => {
      response('pong').code(200);
    },
  },
].concat(dish, user);
