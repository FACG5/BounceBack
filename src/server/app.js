const express = require("express");
const path = require("path");
const Router = require("./controllers");
const cookieParser = require("cookie-parser");
const app = express();

app.disable("x-powered-by");
app.set("port", process.env.PORT || 5000);
app.use(cookieParser());
app.use(Router);
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
