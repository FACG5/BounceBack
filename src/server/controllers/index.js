const express = require('express');
const getCount = require('./getCount');

const Router = express.Router();

Router.get('/overview', getCount.get);

module.exports = Router;
