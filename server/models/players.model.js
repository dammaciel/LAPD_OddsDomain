var mongoose = require('mongoose'),
    Schema = mongoose.Schema

const playerSchema = mongoose.Schema({
    name: String,
    nationality: String,
    dataBorn: String,
    team: String,
    description: String,
    signing: String,
    gender: String,
    position: String,
    hight: String,
    weight: String,
    profilePic: String, //url
});

module.exports = mongoose.model('Player', PlayerSchema);