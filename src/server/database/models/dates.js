const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const dates = sequelize.define('dates', {
    date_start: {
      type: Sequelize.DATE
    },
    date_end: {
      type: Sequelize.DATE
    },
});

module.exports = dates;