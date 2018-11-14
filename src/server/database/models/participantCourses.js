const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const participantCourses = sequelize.define('participantCourses', {
    course_start: {
      type: Sequelize.STRING
    },
    course_end: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    }
});

module.exports = participantCourses;