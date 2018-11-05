const express = require('express');
const Router = express.Router();


Router.get('/test', (req, res) => {
  res.send({ test: 'try if server running properly' });
});

module.exports = Router;
