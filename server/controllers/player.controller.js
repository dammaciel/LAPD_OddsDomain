const Player = require('../models/player.model.js');

const fs = require('fs');

exports.create = (req, res) => {
    fs.readFile('resources/player.json', function(err, data) {
        if (err) {
            console.log('Error Reading File with Player', err);
            res.sendStatus(500);
        } else {
            var obj = JSON.parse(data);
            for (var id = 0; id < Object.keys(obj.player).length; id++) {
                const player = new Player({
                    apiID: obj.player[1].idPlayer,
                    idTeam: obj.player[1].idTeam,
                    name: obj.player[1].strPlayer,
                    nationality: obj.player[1].strNationality,
                    dataBorn: obj.player[1].dateBorn,
                    team: obj.player[1].strTeam,
                    description: obj.player[1].strDescriptionEN,
                    signing: obj.player[1].strSigning,
                    gender: obj.player[1].strGender,
                    position: obj.player[1].strPosition,
                    height: obj.player[1].strHeight,
                    weight: obj.player[1].strWeight,
                    profilePic: obj.player[1].strThumb, //url
                });
                console.log(player);
                player.save()
                    .then(data => {
                        res.send(data);
                    }).catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating the Game."
                        });
                    });

                res.end();
            }
        }
    });
}


// Retrieve and return all Player from the database.
exports.findAll = (req, res) => {
    Player.find()
        .then(players => {
            res.send(players);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Players."
            });
        });
};


// Find a single game with a playerId
exports.findOne = (req, res) => {
    Player.findById(req.params.playerId)
        .then(player => {
            if (!player) {
                return res.status(404).send({
                    message: "Player not found with id" + req.params.playerId
                });
            }
            res.send(player);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Player not found with id" + req.params.playerId
                });
            }
            return res.status(500).send({
                message: "Error retrieving player with id " + req.params.playerId
            });
        });
};


// Delete a game with the specified gameId in the request
exports.delete = (req, res) => {
    Player.findByIdAndRemove(req.params.playerId)
        .then(player => {
            if (!player) {
                return res.status(404).send({
                    message: "Player not found with id " + req.params.playerId
                });
            }
            res.send({ message: "Player deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Player not found with id" + req.params.playerId
                });
            }
            return res.status(500).send({
                message: "Could not delete player with id " + req.params.playerId
            });
        });
};