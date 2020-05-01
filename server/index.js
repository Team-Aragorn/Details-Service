const express = require('express');
const db = require('./database/index.js');

const app = express();
const PORT = 3004;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to the Details Service');
});

app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`);
});
