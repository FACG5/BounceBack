const { Op } = require('sequelize');

const participant = require('../database/models/participant');
const course = require('../database/models/course');
const worker = require('../database/models/worker');


exports.get = async (req, res) => {
  try {
    const countParticipant = await participant.findAndCountAll();
    const countCourse = await course.findAndCountAll();
    const countWorker = await worker.findAndCountAll();
    const notEmployed = 'not employed yet';
    const employed = 'employed';
    const countEmployedParticipant = await participant.findAndCountAll({
      where: {
        employment_outcomes: {
          [Op.like]: `${employed}`,
        },
      },
    });
    const countNotEmployedParticipant = await participant.findAndCountAll({
      where: {
        employment_outcomes: {
          [Op.like]: `${notEmployed}`,
        },
      },
    });
    res.send({
      countParticipant,
      countCourse,
      countWorker,
      countEmployedParticipant,
      countNotEmployedParticipant,
    });
  } catch (err) {
    res.status(500).send({ err });
  }
};
