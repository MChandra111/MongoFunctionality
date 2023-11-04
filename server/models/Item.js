// models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  Entity: String,
  Name: String,
  Classification: String,
  TItle: String,
  Description: String,
  Month: Number,
  Year: Number,
  link: String
  // Other fields as needed
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
