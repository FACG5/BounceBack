const getStaff = require("./../helpers/getStaff");
const checkPassword = require("./../helpers/checkPassword");
const makeToken = require("./../helpers/makeToken");
const staff = require("../database/models/staff");

exports.get = async (req, res) => {
  try {
    const { username, password } = req.body;
    const adminData = await staff.findAll({
      attributes: ["username"],
      where: { role: "admin" }
    });
    if (adminData[0].dataValues.username === username) {
      const { role, password: hasedPassword } = await getStaff(username);
      const isAuth = await checkPassword(password, hasedPassword);
      const token = await makeToken({ role, username });
      if (isAuth) {
        res.cookie("jwt", token, { maxAge: 6048000000 });
        res.send({ username, role });
      } else {
        res.send({ Error: "Password is incorrect" });
      }
    } else {
      res.status(200).send({ Error: "The username is incorrect" });
    }
  } catch (error) {
    res.send({ Error: "There Is Error In Our Network" });
  }
};
