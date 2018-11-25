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
    const pass = 'passed';
    const countPassed = await intervention.findAndCountAll({
      where: {
        enrollment_status: pass,
        course_name: name,
      },
    });
    const fail = 'failed';
    const countFailed = await intervention.findAndCountAll({
      where: {
        enrollment_status: fail,
        course_name: name,
      },
    });
    const drop = 'dropped';
    const countDropped = await intervention.findAndCountAll({
      where: {
        enrollment_status: drop,
        course_name: name,
      },
    });
    const start = 'started';
    const countStarted = await intervention.findAndCountAll({
      where: {
        enrollment_status: start,
        course_name: name,
      },
    });
    const reset = 'reset';
    const countReset = await intervention.findAndCountAll({
      where: {
        enrollment_status: reset,
        course_name: name,
      },
    });
    const not = 'not started yet';
    const countNot = await intervention.findAndCountAll({
      where: {
        enrollment_status: not,
        course_name: name,
      },
    });
    res.send({
      name,
      total,
      countPassed,
      countFailed,
      countDropped,
      countStarted,
      countReset,
      countNot,
    });
  } catch (err) {
    res.status(500).send({ err });
  }
};
