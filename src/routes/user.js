const Models = require('../../models');
const { insertIntoTable } = require('../utils/database.utils');

module.exports = [{
  path: '/user',
  method: 'PUT',
  handler: (request, response) => {
    const user = request.payload;
    insertIntoTable('users', user)
      .then(() => {
        response(user).code(200);
      })
      .catch(() => {
        response('could not enter').code(500);
      });
  },
}, {
  path: '/user',
  method: 'GET',
  handler: (request, response) => {
    const { name } = request.query;
    Models.users.findOne({
      where: {
        name,
      },
      attributes: ['name'],
      include: [{
        model: Models.dishes,
        as: 'dish',
        attributes: ['name', 'dishType', 'chef'],
      }],
    })
      .then((userDetails) => {
        const user = {
          name: userDetails.dataValues.name,
          dish: userDetails.dataValues.dish.dataValues,
        };
        response(user).code(200);
      })
      .catch(() => {
        response('Could not find user').code(500);
      });
  },
}];

