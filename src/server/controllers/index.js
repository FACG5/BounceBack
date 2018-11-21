const express = require('express');
const getCount = require('./getCount');
const participants = require('./participants');
const courses = require('./courses');
const Login = require('./login');
const workers = require('./workers');
const managers = require('./managers');

const Router = express.Router();

// Home page Routes
Router.get('/overview', getCount.get);

// Participants Routes
Router.get('/participants', participants.get);
Router.delete('/participant', participants.delete);
Router.post('/participants/search/name', participants.searchByName);
Router.post('/participants/search/date', participants.searchBydate);
Router.get('/participant/:id', participants.getDetails);
Router.post('/participants', participants.post);
Router.put('/participant/:id', participants.update);

// Participants Dates Routes
Router.get('/participant/:id/dates', participants.getDates);
Router.delete('/date', participants.deleteDate);
Router.get('/participant/:id/date/details/:dateId', participants.getDateDetails);

// Participants Courses Routes
Router.get('/participant/:id/courses', participants.getCourses);
Router.delete('/course', participants.deleteCourse);
Router.get('/participant/:id/course/details/:courseId', participants.getCourseDetails);
Router.post('/participant/:id/course', participants.addCourse);

// Courses Routes
Router.get('/courses', courses.get);
Router.delete('/courses', courses.delete);
Router.post('/courses/search', courses.search);
Router.get('/course/:id', courses.details);
Router.post('/courses', courses.post);
Router.put('/course/:id', courses.update);

// Workers Routes
Router.get('/workers', workers.get);
Router.delete('/workers', workers.delete);
Router.post('/workers/search', workers.search);
Router.get('/worker/:id', workers.getDetails);
Router.post('/workers', workers.post);
Router.put('/worker/:id', workers.update);

// Managers Routes
Router.get('/managers', managers.get);
Router.delete('/managers', managers.delete);
Router.post('/managers/search', managers.search);
Router.get('/manager/:id', managers.getDetails);
Router.post('/managers', managers.post);
Router.put('/manager/:id', managers.update);

// LoginRoute
Router.post('/login', Login.get);

module.exports = Router;
