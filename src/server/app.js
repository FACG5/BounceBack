const express = require("express");
const path = require("path");
const Router = require("./controllers/index");
const cookieParser = require("cookie-parser");
const app = express();

app.disable("x-powered-by");
app.set("port", process.env.PORT || 5000);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Router);

module.exports = app;
