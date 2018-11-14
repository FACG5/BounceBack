const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const dates = sequelize.define('dates', {
    date_start: {
      type: Sequelize.STRING,
      allowNull: false
    },
    date_end: {
      type: Sequelize.STRING,
      allowNull: false
    },
    note: {
      type: Sequelize.TEXT
    }
});

module.exports = dates;