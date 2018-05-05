module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    dishId: DataTypes.INTEGER,
  }, {});
  users.associate = (models) => {
    // associations can be defined here
    users.belongsTo(models.dishes, { foreignKey: 'dishId', as: 'dish' });
  };
  return users;
};
