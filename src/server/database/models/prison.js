const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const prison = sequelize.define('prison', {
  utr_number: {
    type: Sequelize.NUMBER
  },
  prison_name: {
    type: Sequelize.TEXT
  },
  prison_number: {
    type: Sequelize.NUMBER
  },
  officer_name: {
    type: Sequelize.TEXT
  },
  prison_in: {
    type: Sequelize.DATE
  },
  prison_release: {
    type: Sequelize.DATE
  },
  rotl_hdc: {
    type: Sequelize.TEXT
  },
  offence: {
    type: Sequelize.TEXT
  },
  point_of_contact: {
    type: Sequelize.TEXT
  }
});

module.exports = prison;