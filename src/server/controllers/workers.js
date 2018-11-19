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
      res.status(200).send({ message: "delete done" });
    });
  } catch (err) {
    res.status(500).send({ err });
  }
};

exports.search = async (req, res) => {
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

exports.getDetails = async (req, res) => {
  try {
    const workerId = req.params.id;
    const result = await workers.findAll({
      where: {
        id: workerId
      }
    });
    if (result[0]) {
      const details = result[0].dataValues;
      res.status(200).send(details);
    } else {
      res.status(404).send("Error in finding result");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

exports.post = async (req, res) => {
  try {
    const { managerData } = req.body;
    const { count } = await workers.findAndCountAll({
      where: {
        username: managerData.username
      }
    });
    if (count !== 0) throw new TypeError("The name is used before");
    await workers.create(managerData);
    res.send({ message: "Adding worker done" });
  } catch (error) {
    const { message } = error;
    res.send({ error: message });
  }
};
