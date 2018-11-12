const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const user = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
});

user.findAndCountAll().then(result => {
  console.log(result.count);
})
module.exports = user;