const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const worker = sequelize.define('worker', {
  surename: {
    type: Sequelize.TEXT
  },
  forename: {
    type: Sequelize.TEXT
  },
  username: {
    type: Sequelize.TEXT
  },
  date_of_birth: {
    type: Sequelize.DATE
  },
  gender: {
    type: Sequelize.TEXT
  },
  martial_status: {
    type: Sequelize.TEXT
  }
});

module.exports = worker;
