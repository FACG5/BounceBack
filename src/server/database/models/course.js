const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const course = sequelize.define('course', {
  course_name: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: true,
  },
  course_start: {
    type: Sequelize.DATE,
  },
  course_end: {
    type: Sequelize.DATE,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  type: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = course;
