const { insertIntoTable } = require('../utils/database.utils');

module.exports = [{
  path: '/dish',
  method: 'PUT',
  handler: (request, response) => {
    const dish = request.payload;
    insertIntoTable('dishes', dish)
      .then(() => {
        response(dish).code(200);
      })
      .catch(() => {
        response('could not enter').code(500);
      });
  },
}];

