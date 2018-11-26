const participant = require('../database/models/participant');
const course = require('../database/models/course');
const worker = require('../database/models/worker');
const sequelize = require('./../database/config/connection');

exports.get = async (req, res) => {
  try {
    const countParticipant = await participant.findAndCountAll();
    const countCourse = await course.findAndCountAll();
    const countWorker = await worker.findAndCountAll();
    const employed = 'employed';
    const countEmployedParticipant = await participant.findAndCountAll({
      where: {
        employment_outcomes: employed,
      },
    });
    const offending = 'yes';
    const countOffending = await participant.findAndCountAll({
      where: {
        reoffending: offending,
      },
    });
    const counts = await sequelize
      .query("SELECT participant_courses.course_name,count(*) FROM participants JOIN participant_courses ON participant_courses.participant_id = participants.id where participants.employment_outcomes = 'employed' group by (participant_courses.course_name)");
    res.send({
      countParticipant,
      countCourse,
      countWorker,
      countEmployedParticipant,
      countOffending,
      counts,
    });
  } catch (err) {
    res.status(500).send({ err });
  }
};
