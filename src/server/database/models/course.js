const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const course = sequelize.define('course', {
    course_name: {
        type: Sequelize.TEXT
    },
    course_category: {
        type: Sequelize.TEXT
    },
    course_start: {
      type: Sequelize.DATE
    },
    course_end: {
      type: Sequelize.DATE
    },
    description: {
      type: Sequelize.TEXT
    }
});

module.exports = course;