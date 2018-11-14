const participant = require("../database/models/participant");
const course = require("../database/models/course");
const worker = require("../database/models/worker");

exports.get = async (req, res) => {
  try {
    const countParticipant = await participant.findAndCountAll();
    const countCourse = await cousrse.findAndCountAll();
    const countWorker = await worker.findAndCountAll();
    res.send({ countParticipant, countCourse, countWorker });
  } catch (err) {
    res.status(500).send({err});
  }
};
