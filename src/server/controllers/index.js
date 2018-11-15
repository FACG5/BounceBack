const express = require("express");
const getCount = require("./getCount");
const Login = require("./login");
const Router = express.Router();

Router.get("/overview", getCount.get);
Router.post("/login", Login.get);
module.exports = Router;
