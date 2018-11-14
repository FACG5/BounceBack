const express = require('express');
const getCount = require('./getCount');
const participants = require('./participants/getParticipants');

const Router = express.Router();

Router.get('/overview', getCount.get);
Router.get('/participants', participants.get);

module.exports = Router;
