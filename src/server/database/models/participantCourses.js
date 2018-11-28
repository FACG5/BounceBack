const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const participantCourses = sequelize.define('participant_courses', {
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
  type: {
    type: Sequelize.TEXT,
  },
  enrollment_status: {
    type: Sequelize.TEXT,
    defaultValue: 'not completed',
  },
});

module.exports = participantCourses;
