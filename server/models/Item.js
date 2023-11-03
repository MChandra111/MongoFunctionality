// models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  language: String,
  // Other fields as needed
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
