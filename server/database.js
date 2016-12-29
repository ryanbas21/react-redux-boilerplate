const Sequelize = require('sequelize');
const {DatabaseUsername, DatabasePassword, DatabaseURL, DatabasePORT } = require('./config.secret')
const sequelize = new Sequelize(DatabaseURL,DatabaseUsername,DatabasePassword, {
      dialect: "mysql",
      port:    DatabasePORT,
    });

sequelize
  .authenticate()
  .then( err => console.log('Connection has been established successfully.'))
  .catch( err => console.log(`Unable to connect to the database: ${err}`));

module.exports = sequelize;
