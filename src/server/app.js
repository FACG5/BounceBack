const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const uploadFiles = require('express-fileupload');

const app = express();
const Router = require('./controllers');

app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(uploadFiles());
app.use('/api/v2', Router);
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;
