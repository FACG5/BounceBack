const connection = require('../config/connection');
const participants = require('./participant');
const dates = require('./dates');
const workers = require('./worker');
const courses = require('./course');
const prison = require('./prison');
const participantCourses = require('./participantCourses');
const staff = require('./staff');

prison.belongsTo(participants, {
  onDelete: 'CASCADE', foreignKey: 'participant_id', targetKey: 'id',
});
participants.hasMany(prison, { foreignKey: 'participant_id' });

dates.belongsTo(participants, {
  onDelete: 'CASCADE', foreignKey: 'participant_id', targetKey: 'id',
});
participants.hasMany(dates, { foreignKey: 'participant_id' });

participantCourses.belongsTo(participants, {
  onDelete: 'CASCADE', foreignKey: 'participant_id', targetKey: 'id',
});
participants.hasMany(participantCourses, { foreignKey: 'participant_id' });

dates.belongsTo(workers, {
  onDelete: 'CASCADE', foreignKey: 'worker_name', targetKey: 'username',
});
workers.hasMany(dates, { foreignKey: 'worker_name' });

participantCourses.belongsTo(courses, {
  onDelete: 'CASCADE', foreignKey: 'course_name', targetKey: 'course_name',
});
courses.hasMany(participantCourses, { foreignKey: 'course_name' });

module.exports = {
  participants,
  dates,
  workers,
  courses,
  prison,
  staff,
  connection,
};
