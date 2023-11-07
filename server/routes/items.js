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

router.route('/').post((req, res) => {
  const Entity = req.body.Entity;
  const Name = req.body.Name;
  const Classification = req.body.Classification;
  const Title = req.body.Title;
  const Description = req.body.Description;
  const Month = req.body.Month;
  const Year = req.body.Year;
  const link = req.body.link;

  const newItem = new Item({
    Entity,
    Name,
    Classification,
    Title,
    Description,
    Month,
    Year,
    link
  })

  newItem.save()
  .then(() => res.json('Item added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;