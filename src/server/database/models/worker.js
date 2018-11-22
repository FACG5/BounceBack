const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const worker = sequelize.define('worker', {
  surename: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  forename: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  username: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: true,
  },
  date_of_birth: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  gender: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  martial_status: {
    type: Sequelize.TEXT,
  },
});

module.exports = worker;
