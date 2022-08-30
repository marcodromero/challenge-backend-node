const { Sequelize } = require('sequelize');
const setupModels = require('./models/index');

//connection
const sequelize = new Sequelize('disney', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

setupModels(sequelize);

sequelize.sync({force: false}); 

module.exports = sequelize; 