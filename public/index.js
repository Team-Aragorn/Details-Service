"use strict";

var express = require('express');

var db = require('./database/index.js');

var app = express();
var PORT = 3004;
app.use(express["static"]('public'));
app.get("/", function (req, res) {
  res.send('Welcome to the Details Service');
});
app.listen(PORT, function () {
  console.log("Now listening on port: ".concat(PORT));
});