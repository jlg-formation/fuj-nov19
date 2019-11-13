const express = require('express');
const app = express.Router();

module.exports = app;

app.post('/reference', (req, res, next) => {
  res.status(201).json({ id: 'titi' });
});

app.get('/reference', (req, res, next) => {
  res.json([1, 2, 4]);
});
