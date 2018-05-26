const League = require('../models/league.model.js');

const fs = require('fs');

exports.create = (req, res) => {

    fs.readFile('resources/soccerLeagues.json', function(err, data) {
        if (err) {
            console.log('Error Reading File with Leagues', err);
            res.sendStatus(500);
        } else {
            var obj = JSON.parse(data);
            for (var id = 0; id < Object.keys(obj.leagues).length; id++) {
                const league = new League({
                    apiID: obj.leagues[id].idLeague,
                    name: obj.leagues[id].strLeague,
                    formedYear: obj.leagues[id].intFomerdYear,
                    country: obj.leagues[id].strCountry,
                    description: obj.leagues[id].strDescriptionEN,
                    website: obj.leagues[id].strWebsite,
                    logo: obj.leagues[id].strLogo, //url
                    tropheyImage: obj.leagues[id].strTrophy,
                });
                console.log(league);
                league.save()
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

// Retrieve and return all Leagues from the database.
exports.findAll = (req, res) => {
    League.find()
        .then(leagues => {
            res.send(leagues);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Leagues."
            });
        });
};


// Find a single game with a leagueId
exports.findOne = (req, res) => {
    League.findById(req.params.leagueId)
        .then(league => {
            if (!league) {
                return res.status(404).send({
                    message: "Game not found with id" + req.params.leagueId
                });
            }
            res.send(league);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Game not found with id" + req.params.leagueId
                });
            }
            return res.status(500).send({
                message: "Error retrieving game with id " + req.params.leagueId
            });
        });
};


// Delete a game with the specified gameId in the request
exports.delete = (req, res) => {
    League.findByIdAndRemove(req.params.leagueId)
        .then(league => {
            if (!league) {
                return res.status(404).send({
                    message: "League not found with id " + req.params.leagueId
                });
            }
            res.send({ message: "League deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "League not found with id" + req.params.leagueId
                });
            }
            return res.status(500).send({
                message: "Could not delete league with id " + req.params.leagueId
            });
        });
};