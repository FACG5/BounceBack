const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const participantCourses = sequelize.define('participantCourses', {
  course_start: {
    type: Sequelize.DATE,
  },
  course_end: {
    type: Sequelize.DATE,
  },
  details: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  enrollment_status: {
    type: Sequelize.TEXT,
  },
});

module.exports = participantCourses;
