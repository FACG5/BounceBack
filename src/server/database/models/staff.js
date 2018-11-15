const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const staff = sequelize.define('staff', {
    role: {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: 'manager'
    },
    surname: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    forename: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    fullname: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    username: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    date_of_birth: {
      type: Sequelize.DATE,
      allowNull: false
    },
    gender: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    martial_status: {
      type: Sequelize.TEXT
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    full_address: {
      type: Sequelize.TEXT
    },
    postcode: {
      type: Sequelize.TEXT
    },
    mobile: {
      type: Sequelize.STRING,
      allowNull: false
    },
    landline: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false
    }
});

module.exports = staff;