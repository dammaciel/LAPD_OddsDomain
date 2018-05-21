var mongoose = require('mongoose'),
    Schema = mongoose.Schema

const leagueSchema = mongoose.Schema({
    name: String,
    formedYear: String,
    country: String,
    description: String,
    website: String,
    logo: String, //url
    tropheyImage: String,

});

module.exports = mongoose.model('League', LeagueSchema);