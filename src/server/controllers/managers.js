const { Op } = require("sequelize");
const managers = require("../database/models/staff");

exports.get = async (req, res) => {
  try {
    const managersData = await managers.findAll({ where: { role: "manager" } });
    res.send({ managersData });
  } catch (err) {
    res.status(500).send({ err });
  }
};

exports.delete = (req, res) => {
  try {
    managers.destroy({ where: { id: req.body.managerId } }).then(() => {
      res.status(200).send({ err: null, message: "delete done" });
    });
  } catch (err) {
    res.status(500).send({ err });
  }
};

exports.search = async (req, res) => {
  try {
    const { managerName } = req.body;
    const managersData = await managers.findAll({
      where: {
        fullname: {
          [Op.like]: `%${managerName}%`
        }
      }
    });
    if (managersData[0]) {
      res.send({ managersData });
    } else {
      res.send({ message: "There is no managers in this name" });
    }
  } catch (err) {
    res.send({ err });
  }
};

exports.getDetails= async (req, res) => {
  try {
    const managerId = req.params.id;
    const result = await managers.findAll({
      where: {
        id: managerId 
      }
    });
    if (result[0]) {
      const details= (result[0].dataValues);
      console.log(details);
      
      res.status(200).send(details);
    } else {
      res.status(404).send("Error in finding result");
    }
  } catch (error) {
    console.log(error)
    res.status(500).send('Server Error');
  }
}; 
