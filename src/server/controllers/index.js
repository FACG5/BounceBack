const express = require('express');
const getCount = require('./getCount');
const courses = require('./courses');

const Router = express.Router();

Router.get('/overview', getCount.get);
Router.get('/courses', courses.get);
Router.delete('/courses', courses.delete);

module.exports = Router;
