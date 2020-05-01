const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher');
const db = mongoose.connection;
db.once('open', () => {
  console.log(`Connected to MongoDB ${db.host}:${db.port}`);
});

let schema = mongoose.Schema({
  title: String,
  reviewScore: Number,
  ageRating: String,
  newPrice: Number,
  usedPrice: Number,
  digitalPrice: Number,
  storeLocation: String,
  inStock: Boolean,
})

db.on('error', console.error.bind(console, 'connection error:'));
