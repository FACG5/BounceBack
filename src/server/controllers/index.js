const express = require('express');
const getCount = require('./getCount');
const participants = require('./participants');
const courses = require('./courses');
const Login = require("./login");
const workers = require("./workers");
const managers = require("./managers");

const Router = express.Router();


Router.get('/overview', getCount.get);

Router.get('/participants', participants.get);
Router.delete('/participant', participants.delete);

Router.get('/courses', courses.get);
Router.delete("/courses", courses.delete);

Router.get("/workers", workers.get);
Router.delete("/workers", workers.delete);
Router.post("/workers/search", workers.search);


Router.get("/managers", managers.get);
Router.delete("/managers", managers.delete);

Router.post("/login", Login.get);

module.exports = Router;
