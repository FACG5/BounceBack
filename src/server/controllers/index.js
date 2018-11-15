const express = require('express');
const getCount = require('./getCount');
const courses = require('./courses');
const workers = require('./workers');
const managers = require('./managers');

const Router = express.Router();

Router.get('/overview', getCount.get);
Router.get('/courses', courses.get);
Router.get('/workers', workers.get);
Router.delete('/workers', workers.delete);
Router.delete('/courses', courses.delete);
Router.get('/managers', managers.get);
Router.delete('/managers', managers.delete);

module.exports = Router;
