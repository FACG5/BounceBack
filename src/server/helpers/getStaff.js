const Staffs = require("../database/models/staff");

module.exports = async username => {
  const staff = await Staffs.findOne({
    where: { username },
    attributes: ["role", "username", "password"]
  });
  return staff.dataValues;
};
