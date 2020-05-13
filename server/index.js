const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./database/index.js');

const app = express();
const PORT = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/games/:id', express.static('public'));
app.use(express.json());

app.get('/api/games/:id', (req, res) => {
  let id = Number(path.basename(req.url));
  if (id < 0 || id > 100) {
    id = 1;
  }
  db.getGame(id, (err, result) => {
    if (err) {
      res.sendStatus(500);
      res.end();
    } else {
      res.send(result);
      res.end();
    }
  });
});

app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`);
});

module.exports = app;
