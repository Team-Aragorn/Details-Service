const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/games', { useUnifiedTopology: true, useNewUrlParser: true });

const gameSchema = new mongoose.Schema({
  id: Number,
  name: String,
  details: String,
  images: [{ name: String, url: String }],
  videos: [{ name: String, url: String }],
});


const Game = mongoose.model('Game', gameSchema);
