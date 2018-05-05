'use strict';
module.exports = (sequelize, DataTypes) => {
  var dishes = sequelize.define('dishes', {
    name: DataTypes.STRING,
    dishType: DataTypes.STRING,
    chef: DataTypes.STRING
  }, {});
  dishes.associate = function(models) {
    // associations can be defined here
  };
  return dishes;
};