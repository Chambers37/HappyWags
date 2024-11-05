
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  petfinderId: { type: String, unique: true },
  name: String,
  type: String, 
  age: String,
  breed: String,
  description: String,
  imageUrl: String,
});

const Pet = mongoose.model('Pet', petSchema);
module.exports = Pet;