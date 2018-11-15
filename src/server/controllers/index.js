const express = require('express');
const getCount = require('./getCount');
const participants = require('./participants');
const courses = require('./courses');

const Router = express.Router();

Router.get('/overview', getCount.get);
Router.get('/participants', participants.get);
Router.delete('/participant', participants.delete);
Router.get('/courses', courses.get);
Router.delete('/courses', courses.delete);

module.exports = Router;
