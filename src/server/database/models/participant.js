const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const participant = sequelize.define('participant', {
  surename: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  forename: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  fullname: {
    type: Sequelize.TEXT,
  },
  date_of_birth: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  address: {
    type: Sequelize.TEXT,
  },
  gender: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  martial_status: {
    type: Sequelize.TEXT,
  },
  sexual_orientatuin: {
    type: Sequelize.TEXT,
  },
  ethincity: {
    type: Sequelize.TEXT,
  },
  dependents: {
    type: Sequelize.TEXT,
  },
  nationality: {
    type: Sequelize.TEXT,
  },
  borough: {
    type: Sequelize.TEXT,
  },
  postcode: {
    type: Sequelize.TEXT,
  },
  mobile: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  landline: {
    type: Sequelize.STRING,
  },
  kin_contact: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ni_number: {
    type: Sequelize.STRING,
  },
  support_required: {
    type: Sequelize.STRING,
  },
  cscs_number: {
    type: Sequelize.TEXT,
  },
  cscs_support: {
    type: Sequelize.TEXT,
  },
  case_worker: {
    type: Sequelize.STRING,
  },
  leteracy_level: {
    type: Sequelize.TEXT,
  },
  numeracy_level: {
    type: Sequelize.INTEGER,
  },
  disability_and_medical: {
    type: Sequelize.TEXT,
  },
  employment_outcomes: {
    type: Sequelize.STRING,
  },
  reoffending: {
    type: Sequelize.STRING,
  },
});

module.exports = participant;
