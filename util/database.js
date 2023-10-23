const seq = require('sequelize');

const sequelize = new seq('node-complete', 'root', 'root', {
   dialect: 'mysql',
   host: '127.0.0.1',
   port: '3306'
});

module.exports = sequelize;