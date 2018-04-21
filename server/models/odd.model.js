var mongoose = require('mongoose')
  , Schema = mongoose.Schema

const OddSchema = mongoose.Schema({
    oddHouse: String,
    oddHome: String,
    oddAway: String,
    oddTie: String,
    gameId: { type: Schema.Types.ObjectId, ref: 'Game' },
});

module.exports = mongoose.model('Odd', OddSchema);