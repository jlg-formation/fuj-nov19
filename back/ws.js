const express = require('express');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const app = express.Router();
const { notify } = require('./notify');

module.exports = app;

const Reference = mongoose.model(
  'Reference',
  new mongoose.Schema(
    {
      label: { type: String, required: true },
      category: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true }
    },
    { strict: true }
  )
);

async function init() {
  await mongoose.connect('mongodb://localhost/shoshop', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
}

init();

app.use(express.json());

app.post('/reference', async (req, res, next) => {
  const reference = new Reference(req.body);
  await reference.save();
  notify();
  res.status(201).json(reference.toObject());
});

app.get('/reference', async (req, res, next) => {
  const references = await Reference.find({});
  res.json(references.map(r => r.toObject()));
});
