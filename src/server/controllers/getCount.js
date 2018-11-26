const participant = require('../database/models/participant');
const course = require('../database/models/course');
const worker = require('../database/models/worker');
const intervention = require('../database/models/participantCourses');

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
    const countEmployedReOffenging = await participant.findAndCountAll({
      where: {
        employment_outcomes: employed,
        reoffending: 'yes',
      },
    });
    const offending = 'yes';
    const countOffending = await participant.findAndCountAll({
      where: {
        reoffending: offending,
      },
    });
    res.send({
      countParticipant,
      countCourse,
      countWorker,
      countEmployedParticipant,
      countOffending,
      countEmployedReOffenging,
    });
  } catch (err) {
    res.status(500).send({ err });
  }
};

exports.getEnrollmentStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const courseName = await course.findAll({
      attributes: ['course_name'],
      where: {
        id,
      },
    });
    const name = courseName[0].dataValues.course_name;
    const total = await intervention.findAndCountAll({
      where: {
        course_name: name,
      },
    });
    const complete = 'completed';
    const countCompleted = await intervention.findAndCountAll({
      where: {
        enrollment_status: complete,
        course_name: name,
      },
    });
    res.send({
      name,
      total,
      countCompleted,
    });
  } catch (err) {
    res.status(500).send({ err });
  }
};
