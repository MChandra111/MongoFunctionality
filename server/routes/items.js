const express = require('express');
const router = express.Router();
const Item = require('../models/Item'); // Your Mongoose model for items

router.get('/', async (req, res) => {
  try {
    const items = await Item.find(); // Adjust to fit your requirements
    res.json(items);
  } catch (err) {
    console.error('Error fetching data', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;