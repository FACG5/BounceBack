const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const prison = sequelize.define('prison', {
  prison_name: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  contact_details: {
    type: Sequelize.STRING,
  },
  prison_number: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  officer_name: {
    type: Sequelize.TEXT,
  },
  prison_in: {
    type: Sequelize.DATE,
  },
  prison_release: {
    type: Sequelize.DATE,
  },
  rotl_hdc: {
    type: Sequelize.TEXT,
  },
  offence: {
    type: Sequelize.TEXT,
  },
  point_of_contact: {
    type: Sequelize.TEXT,
  },
});

module.exports = prison;
