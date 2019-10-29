const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  equipe: {type: String},
  nom: {type: String},
  match: {type: Number},
  victoire: {type: Number},
  nul: {type: Number},
  defaite: {type: Number},
  butsplus: {type: Number},
  butsmoins: {type: Number},
  diff: {type: Number},
  points: {type: Number},
  malus: {type: Number}
}, { collection : 'classementbdd' });

const Classement = mongoose.model('classement', userSchema);
module.exports = Classement;
