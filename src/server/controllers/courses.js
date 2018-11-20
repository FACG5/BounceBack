const { Op } = require('sequelize');
const courses = require('../database/models/course');

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

exports.search = async (req, res) => {
  try {
    const { courseName } = req.body;
    const result = await courses.findAll({
      where: {
        course_name: {
          [Op.like]: `%${courseName}%`,
        },
      },
    });
    if (result[0]) {
      res.send({ result });
    } else {
      res.send({ message: 'Cant find course with this name' });
    }
  } catch (error) {
    res.send({ error });
  }
};

exports.details = async (req, res) => {
  try {
    const courseId = req.params.id;
    const result = await courses.findAll({
      where: {
        id: courseId,
      },
    });
    const details = (result[0].dataValues);
    if (result[0]) {
      res.send(details);
    } else {
      res.send({ message: 'Error in finding result' });
    }
  } catch (error) {
    res.send({ error });
  }
};

exports.post = async (req, res) => {
  try {
    const { courseData } = req.body;
    const { count } = await courses.findAndCountAll({
      where: {
        course_name: courseData.course_name,
      },
    });
    if (count !== 0) throw new TypeError('The name is used before');
    await courses.create(courseData);
    res.send({ message: 'Adding course done' });
  } catch (error) {
    const { message } = error;
    res.send({ error: message });
  }
};
