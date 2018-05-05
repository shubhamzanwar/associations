module.exports = () => ({
  development: {
    username: process.env.ASSOCIATION_USER,
    password: process.env.ASSCOCIATION_PASSWORD,
    database: process.env.ASSOCIATION_DEV_DB,
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: process.env.ASSOCIATION_USER,
    password: process.env.ASSCOCIATION_PASSWORD,
    database: process.env.ASSOCIATION_TEST_DB,
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: process.env.ASSOCIATION_USER,
    password: process.env.ASSCOCIATION_PASSWORD,
    database: process.env.ASSOCIATION_PROD_DB,
    host: '127.0.0.1',
    dialect: 'postgres',
  },
});
