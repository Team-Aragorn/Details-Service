const express = require('express');
const path = require('path');
const db = require('./database/index.js');

const app = express();
const PORT = 3004;

app.use(express.static('public'));
app.use(express.json());

app.get('/api/game/:id', (req, res) => {
  const id = Number(path.basename(req.url));
  db.getGame(id, (err, result) => {
    if (err) {
      res.sendStatus(500);
      res.end();
    } else {
      res.send(result).json();
      res.end();
    }
  });
});

app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`);
});
