const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  nom: {type: String},
  prenom: {type: String},
  match: {type: Number},
  buts: {type: Number},
  assists: {type: Number},
  points: {type: Number},
  position: {type: String},
  numero: {type: Number}
}, { collection : 'joueurs' });

const Joueurs = mongoose.model('joueurs', userSchema);
module.exports = Joueurs;
