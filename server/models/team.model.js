var mongoose = require('mongoose'),
    Schema = mongoose.Schema

const TeamSchema = mongoose.Schema({
    apiID: String,
    name: String,
    shortName: String,
    manager: String,
    stadium: String,
    country: String,
    teamBadge: String, //url
    teamJersey: String, //url
    website: String,
});

module.exports = mongoose.model('Team', TeamSchema);