const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const dates = sequelize.define('dates', {
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  note: {
    type: Sequelize.TEXT,
  },
});

module.exports = dates;
