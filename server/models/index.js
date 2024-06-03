const Sequelize = require('sequelize');

// Create a Sequelize instance
const sequelize = new Sequelize({
  dialect: 'postgres', // Choose the appropriate dialect for your database
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const db = {};

// Import models
db.Menu = require('./menu')(sequelize, Sequelize);
db.Employee = require('./employee')(sequelize, Sequelize);

// Assign Sequelize instance to db object
db.sequelize = sequelize;

// Export db object
module.exports = db;
