const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  equipe: {type: String},
  nom: {type: String},
  points: {type: Number},
  malus: {type: Number}
}, { collection : 'classement' });

const Classement = mongoose.model('classement', userSchema);
module.exports = Classement;
