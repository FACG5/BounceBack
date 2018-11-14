const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const prison = sequelize.define('prison', {
  utr_number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  prison_name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  prison_number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  officer_name: {
    type: Sequelize.TEXT
  },
  prison_in: {
    type: Sequelize.STRING
  },
  prison_release: {
    type: Sequelize.STRING
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