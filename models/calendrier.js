const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  gameDate: {type: String},
  timestamp: {type: Number},
  equipe1: {type: String},
  equipe2: {type: String},
  score1: {type: String},
  score2: {type: String},
  patinoire: {type: String},
  resultat: {type: String}
}, { collection : 'calendrierbdd' });

const Calendrier = mongoose.model('calendrier', userSchema);
module.exports = Calendrier;
