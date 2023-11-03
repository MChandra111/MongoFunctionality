const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors(
  {
    origin: ["https://main-website-beige.vercel.app/About", "http://localhost:3000", "http://localhost:3000/About"],
    methods: ["POST", "GET"],
  }
))

app.use(express.json());

const itemsRouter = require('./routes/items');
app.use('/api/items', itemsRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});