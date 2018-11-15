const express = require("express");
const getCount = require("./getCount");
const Login = require("./login");
const workers = require("./workers");
const courses = require("./courses");

const Router = express.Router();

Router.get("/overview", getCount.get);
Router.get("/courses", courses.get);
Router.get("/workers", workers.get);
Router.delete("/workers", workers.delete);
Router.delete("/courses", courses.delete);
Router.post("/login", Login.get);

module.exports = Router;
