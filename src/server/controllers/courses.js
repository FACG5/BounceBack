const { Op } = require('sequelize');
const courses = require('../database/models/course');

// get the courses
exports.get = async (req, res) => {
  try {
    const coursesData = await courses.findAll();
    res.send({ coursesData });
  } catch (err) {
    res.status(500).send({ err });
  }
};

// get trainings
exports.getName = async (req, res) => {
  try {
    const coursesData = await courses.findAll({
      where: {
        type: 'trainings',
      },
    });
    res.send({ coursesData });
  } catch (err) {
    res.status(500).send({ err });
  }
};

// get pastoral
exports.getPastoral = async (req, res) => {
  try {
    const coursesData = await courses.findAll({
      where: {
        type: 'pastoral',
      },
    });
    res.send({ coursesData });
  } catch (err) {
    res.status(500).send({ err });
  }
};

// Delete course
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
    const { searchInput } = req.body;
    const result = await courses.findAll({
      where: {
        course_name: {
          [Op.iLike]: `%${searchInput}%`,
        },
      },
    });
    if (result[0]) {
      res.send({ result });
    } else {
      res.send({ message: 'Cant find intervention with this name' });
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

// add new course
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
    res.send({ message: 'Adding intervention done' });
  } catch (error) {
    const { message } = error;
    res.send({ error: message });
  }
};

// Update information of course
exports.update = async (req, res) => {
  try {
    const { courseData } = req.body;
    const courseId = req.params.id;
    await courses.update(courseData, {
      where: {
        id: courseId,
      },
    });
    res.send({ message: 'updating data is done' });
  } catch (error) {
    const { message } = error;
    res.send({ error: message });
  }
};
