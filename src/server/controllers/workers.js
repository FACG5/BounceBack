const workers = require("../database/models/worker");

exports.get = async (req, res) => {
  try {
    const workersData = await workers.findAll();
    res.send({ workersData });
  } catch (err) {
    res.status(500).send({ err });
  }
};
