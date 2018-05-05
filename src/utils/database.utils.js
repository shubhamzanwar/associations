const Models = require('../../models');

const insertIntoTable = (tableName, data) => Models[tableName].create(data);

module.exports = {
  insertIntoTable,
};
