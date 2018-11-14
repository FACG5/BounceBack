const courses = require("../database/models/course");

exports.get = async (req, res) => {
  try {
    const coursesData = await courses.findAll();
    res.send({ coursesData });
  } catch (err) {
    res.status(500).send({ err });
  }
};

exports.delete = (req, res) => {
  try {
    courses.destroy({ where: { id: req.body.courseId } }).then(() => {
      res.status(200).send({ message: 'delete done' });
    });
  } catch (err) {
    res.status(500).send({ err });
  }
};
