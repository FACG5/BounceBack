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
      res.status(200).send({err: null, message: 'delete done' });
    });
  } catch (err) {
    res.status(500).send({ err });
  }
}
