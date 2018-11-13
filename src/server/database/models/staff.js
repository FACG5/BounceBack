const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const staff = sequelize.define('staff', {
    role: {
      type: Sequelize.TEXT
    },
    surename: {
      type: Sequelize.TEXT
    },
    forename: {
      type: Sequelize.TEXT
    },
    fullname: {
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
    },
    email: {
      type: Sequelize.STRING
    },
    full_address: {
      type: Sequelize.TEXT
    },
    postcode: {
      type: Sequelize.TEXT
    },
    mobile: {
      type: Sequelize.NUMBER
    },
    landline: {
      type: Sequelize.NUMBER
    },
    password: {
      type: Sequelize.TEXT
    }
});

module.exports = staff;