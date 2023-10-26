const express = require('express');
const { resolve } = require('path');
const routeur = require('./routeur.js');

const app = express();
const port = 3010;
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/test', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index1.html'));
});

app.use('/routeur', routeur);

const requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

app.use(requestTime);

app.get('/paramdyn', (req, res) => {
  res.send(`il est ${requestTime}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
