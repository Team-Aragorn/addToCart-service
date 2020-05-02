const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/games', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log(`Connected to MongoDB ${db.host}:${db.port}`);
});

const schema = new mongoose.Schema({
  gameId: Number,
  title: String,
  reviewScore: Number,
  ageRating: String,
  newPrice: Number,
  usedPrice: Number,
  digitalPrice: Number,
  storeLocation: String,
  inStock: Boolean,
});

var Games = mongoose.model('Games', schema)

db.on('error', console.error.bind(console, 'connection error:'));

module.exports.db = db;
