const Team = require('../models/team.model.js');
const Player = require('../models/player.model.js');

const fs = require('fs');

exports.create = (req, res) => {

    fs.readFile('resources/teams.json', function(err, data) {
        if (err) {
            console.log('Error Reading File with Teams', err);
            res.sendStatus(500);
        } else {
            var obj = JSON.parse(data);
            for (var id = 0; id < Object.keys(obj.teams).length; id++) {
                const team = new Team({
                    apiID: obj.teams[id].idTeam,
                    name: obj.teams[id].strTeam,
                    shortName: obj.teams[id].strTeamShort,
                    manager: obj.teams[id].strManager,
                    stadium: obj.teams[id].strStadium,
                    country: obj.teams[id].strCountry,
                    teamBadge: obj.teams[id].strTeamBadge, //url
                    teamJersey: obj.teams[id].strTeamJersey, //url
                    website: obj.teams[id].strWebsite,
                });
                console.log(team);
                team.save()
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


exports.findAll = (req, res) => {
    Team.find()
        .then(teams => {
            res.send(teams);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving teams."
            });
        });
};

exports.findOne = (req, res) => {
    Team.findOne({ name: req.params.team })
        .then(team => {
            if (!team) {
                return res.status(404).send({
                    message: "team not found with id" + req.params.teamId
                });
            }
            res.send(team);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "team not found with id" + req.params.teamId
                });
            }
            return res.status(500).send({
                message: "Error retrieving team with id " + req.params.teamId
            });
        });
};


exports.update = (req, res) => {

    //Find game and update it with the request body
    Team.findByIdAndUpdate(req.params.teamId, {
            date: req.body.date,
            score: req.body.score
        }, { new: true })
        .then(team => {
            if (!team) {
                return res.status(404).send({
                    message: "Team not found with id " + req.params.teamId
                });
            }
            res.send(team);
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {

                return res.status(404).send({
                    message: "Team not found with id " + req.params.teamId
                });
            }
            return res.status(500).send({
                message: "Error updating team with id " + req.params.teamId
            });
        });
};

exports.delete = (req, res) => {
    Team.findByIdAndRemove(req.params.teamId)
        .then(team => {
            if (!team) {
                return res.status(404).send({
                    message: "Team not found with id " + req.params.teamId
                });
            }
            res.send({ message: "Team deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Team not found with id" + req.params.teamId
                });
            }
            return res.status(500).send({
                message: "Could not delete team with id " + req.params.teamId
            });
        });
};

exports.findAllPlayers = (req, res) => {
    Player.find({ team: req.params.team })
        .then(players => {
            res.send(players);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving players."
            });
        });
};