const express = require('express');
const path = require('path');
const db = require('./database/index.js');

const app = express();
const PORT = 3004;

app.use(express.static('public'));
app.use(express.json());

app.get('/api/game/:id', (req, res) => {
  let id = Number(path.basename(req.url));
  if (id < 0 || id > 99) {
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
