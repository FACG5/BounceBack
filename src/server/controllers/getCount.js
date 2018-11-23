const { Op } = require('sequelize');
const participant = require('../database/models/participant');
const course = require('../database/models/course');
const worker = require('../database/models/worker');

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
