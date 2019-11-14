const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express.Router();

module.exports = app;

const filename = path.resolve(__dirname, './data.json');

let id = 0;
let references = [];
try {
  const str = fs.readFileSync(filename, { encoding: 'utf8' });
  references = JSON.parse(str);
  id = references[references.length - 1].id;
} catch (error) {}

app.use(express.json());

app.post('/reference', (req, res, next) => {
  id++;
  req.body.id = id;
  references.push(req.body);
  fs.writeFileSync(filename, JSON.stringify(references, null, 2));
  res.status(201).json(req.body);
});

app.get('/reference', (req, res, next) => {
  res.json([1, 2, 4]);
});
