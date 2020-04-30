"use strict";

var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/games', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
var gameSchema = new mongoose.Schema({
  id: Number,
  name: String,
  details: String,
  images: [{
    name: String,
    url: String
  }],
  videos: [{
    name: String,
    url: String
  }]
});
var Game = mongoose.model('Game', gameSchema);