const express = require('express');
const getCount = require('./getCount');
const participants = require('./participants');
const courses = require('./courses');
const Login = require('./login');
const workers = require('./workers');
const managers = require('./managers');
const prison = require('./prison');
const auth = require('./../middleware/auth');
const { download } = require('./download');

const Router = express.Router();


// LoginRoute
Router.post('/login', Login.get);

Router.use(auth);

// Home page Routes
Router.get('/overview', getCount.get);

// Participants Routes
Router.get('/participants', participants.get);
Router.get('/participant/:id', participants.getDetails);
Router.post('/participants/search/forename', participants.searchByForeName);
Router.post('/participants/search/surname', participants.searchBySurName);
Router.post('/participants/search/date', participants.searchBydate);
Router.post('/participants', participants.post);
Router.put('/participant/:id', participants.update);
Router.delete('/participant', participants.delete);

// Participants Prison Details Routes
Router.post('/participants/:id/prison', prison.post);
Router.get('/participants/:id/prison', prison.getIfPrison);
Router.put('/prison/:id', prison.editPrisonerDetails);

// Participants Dates Routes
Router.put('/participant/:id/date/:dateId', participants.editDate);
Router.get('/participant/:id/dates', participants.getDates);
Router.get('/participant/:id/date/details/:dateId', participants.getDateDetails);
Router.post('/participant/:id/date', participants.addDate);
Router.delete('/date', participants.deleteDate);

// Participants Courses Routes
Router.get('/participant/:id/courses', participants.getCourses);
Router.get('/participant/:id/course/details/:courseId', participants.getCourseDetails);
Router.post('/participant/:id/course', participants.addCourse);
Router.delete('/course', participants.deleteCourse);
Router.put('/participant/:id/course/:courseId', participants.editTraining);

// Courses Routes
Router.get('/courses', courses.get);
Router.get('/courses/name', courses.getName);
Router.get('/courses/pastoral', courses.getPastoral);
Router.get('/course/:id', courses.details);
Router.get('/enrollment/:id', getCount.getEnrollmentStatus);
Router.post('/courses/search', courses.search);
Router.post('/courses', courses.post);
Router.put('/course/:id', courses.update);
Router.delete('/courses', courses.delete);

// Workers Routes
Router.get('/workers', workers.get);
Router.get('/worker/:id', workers.getDetails);
Router.post('/workers/search', workers.search);
Router.post('/workers', workers.post);
Router.put('/worker/:id', workers.update);
Router.delete('/workers', workers.delete);

// Managers Routes
Router.get('/managers', managers.get);
Router.get('/manager/:id', managers.getDetails);
Router.post('/managers/search', managers.search);
Router.post('/managers', managers.post);
Router.put('/manager/:id', managers.update);
Router.delete('/managers', managers.delete);

Router.get('/download/:id', download);

module.exports = Router;
