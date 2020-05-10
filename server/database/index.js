/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/games', { useUnifiedTopology: true, useNewUrlParser: true });

const gameSchema = new mongoose.Schema({
  id: Number,
  name: String,
  details: String,
  images: [String],
  // videos: [{ name: String, url: String }],
});


const Game = mongoose.model('Game', gameSchema);

const save = (game) => {
  const newGame = new Game({
    id: game.id,
    name: game.name,
    details: game.details,
    images: game.images,
    // videos: [{ id: game.videos.id, url: game.videos.url }],
  });

  return newGame.save().then(() => {
    console.log('Game saved');
  });
};

const getGame = (id, cb) => {
  Game.find({ id }, (err, game) => {
    if (err) {
      return cb(err, null);
    }
    return cb(null, game);
  });
};

const deleteAll = () => {
  Game.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

module.exports = {
  save,
  getGame,
  deleteAll,
};
