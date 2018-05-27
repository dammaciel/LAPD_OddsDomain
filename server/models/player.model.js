var mongoose = require('mongoose'),
    Schema = mongoose.Schema

const PlayerSchema = mongoose.Schema({
    apiID: String,
    idTeam: String,
    name: String,
    nationality: String,
    dataBorn: String,
    team: String,
    description: String,
    signing: String,
    gender: String,
    position: String,
    height: String,
    weight: String,
    profilePic: String, //url
});

module.exports = mongoose.model('Player', PlayerSchema);