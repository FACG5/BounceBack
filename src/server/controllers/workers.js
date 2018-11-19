const { Op } = require("sequelize");
const workers = require("../database/models/worker");

exports.get = async (req, res) => {
  try {
    const workersData = await workers.findAll();
    res.send({ workersData });
  } catch (err) {
    res.status(500).send({ err });
  }
};

exports.delete = (req, res) => {
  try {
    workers.destroy({ where: { id: req.body.workerId } }).then(() => {
      res.status(200).send({ message: 'delete done' });
    });
  } catch (err) {
    res.status(500).send({ err });
  }
};

exports.search= async (req, res) => {
  try {
    const { workerName } = req.body;
    const resultSearch = await workers.findAll({
      where: {
        username: {
          [Op.like]: `%${workerName}%`
        }
      }
    });
    if (resultSearch[0]) {
      res.send({ resultSearch });
    } else {
      res.send({ message: "Can't find worker with this name" });
    }
  } catch (error) {
    res.send({ error });
  }
}; 

exports.getDetails= async (req, res) => {
  try {
    const workerId = req.params.id;
    const result = await workers.findAll({
      where: {
        id: workerId 
      }
    });
    const details= (result[0].dataValues)
    if (result[0]) {
      res.send({ details });
    } else {
      res.send({ message: "Error in finding result" });
    }
  } catch (error) {
    res.send({ error });
  }
};
