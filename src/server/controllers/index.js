const express = require('express');
const getCount = require('./getCount');
const participants = require('./participants');
const courses = require('./courses');
const Login = require('./login');
const workers = require('./workers');
const managers = require('./managers');

const Router = express.Router();


Router.get('/overview', getCount.get);

Router.get('/participants', participants.get);
Router.delete('/participant', participants.delete);
Router.post('/participants/search/name', participants.searchByName);
Router.post('/participants/search/date', participants.searchBydate);
Router.get('/participant/:id', participants.getDetails);
Router.post('/participants', participants.post);
Router.put('/participant/:id', participants.update);

Router.get('/participant/:id/dates', participants.getDates);
Router.delete('/date', participants.deleteDate);
Router.get('/participant/:id/date/details/:dateId', participants.getDateDetails);

Router.get('/participant/:id/courses', participants.getCourses);
Router.delete('/course', participants.deleteCourse);

Router.get('/courses', courses.get);
Router.delete('/courses', courses.delete);
Router.post('/courses/search', courses.search);
Router.get('/course/:id', courses.details);
Router.post('/courses', courses.post);

Router.get('/workers', workers.get);
Router.delete('/workers', workers.delete);
Router.post('/workers/search', workers.search);
Router.get('/worker/:id', workers.getDetails);
Router.post('/workers', workers.post);


Router.get('/managers', managers.get);
Router.delete('/managers', managers.delete);
Router.post('/managers/search', managers.search);
Router.get('/manager/:id', managers.getDetails);
Router.post('/managers', managers.post);

Router.post('/login', Login.get);

module.exports = Router;
