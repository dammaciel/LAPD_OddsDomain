const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
    teamHome: String,
    teamAway: String,
    score: String,
    date: String
});

module.exports = mongoose.model('Game', GameSchema);