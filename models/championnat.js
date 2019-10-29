const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  date: {type: String},
  equipe1: {type: String},
  equipe2: {type: String},
  score1: {type: Number},
  score2: {type: Number}
}, { collection : 'championnat' });

const Championnat = mongoose.model('championnat', userSchema);
module.exports = Championnat;
