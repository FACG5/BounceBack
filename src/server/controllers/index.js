const express = require('express');
const getCount = require('./getCount');
const courses = require('./courses');
const workers = require('./workers');

const Router = express.Router();

Router.get('/overview', getCount.get);
Router.get('/courses', courses.get);
Router.get('/workers', workers.get);
Router.delete('/workers', workers.delete);

module.exports = Router;
