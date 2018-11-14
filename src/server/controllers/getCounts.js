const participant = require('../database/models/participant');
const course = require('../database/models/course');
const worker = require('../database/models/worker');

exports.get = async (req, res) => {
    const countUser = await participant.findAndCountAll();
    const countCourse = await course.findAndCountAll();
    const countWorker = await worker.findAndCountAll();
    res.send({countUser, countCourse, countWorker});
}