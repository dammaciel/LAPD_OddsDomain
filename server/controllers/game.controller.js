const Game = require('../models/game.model.js');
const Odd = require('../models/odd.model.js');

const fs = require('fs');

// Create and Save a new Game
exports.create = (req, res) => {

    fs.readFile('resources/games.json', function(err, data) {
        if (err) {
            console.log('Error Reading File with Games', err);
            res.sendStatus(500);
        } else {
            var obj = JSON.parse(data);
            for (var id = 0; id < obj.total; id++) {
                Game.findOne({ apiID: obj.games[id].id }, function(err, doc) {
                    id = id - 1;
                    if (err)
                        console.log(err);
                    if (doc === null) {
                        const game = new Game({
                            apiID: obj.games[id].id,
                            teamHome: obj.games[id].jogo[1],
                            teamAway: obj.games[id].jogo[2],
                            score: "0-0",
                            date: obj.games[id].date,
                            hour: obj.games[id].time
                        });
                        game.save()
                            .then(data => {
                                res.send(data);
                            }).catch(err => {
                                res.status(500).send({
                                    message: err.message || "Some error occurred while creating the Game."
                                });
                            });

                        if (obj.games[id].odds.betclic) {
                            const odd = new Odd({
                                oddHouse: obj.games[id].odds.betclic.nome,
                                oddHome: obj.games[id].odds.betclic[1],
                                oddAway: obj.games[id].odds.betclic[2],
                                oddTie: obj.games[id].odds.betclic.x,
                                gameId: game.id
                            });
                            odd.save()
                                .then(data => {
                                    res.send(data);
                                }).catch(err => {
                                    res.status(500).send({
                                        message: err.message || "Some error occurred while creating the odd."
                                    });
                                });

                        }
                        if (obj.games[id].odds.betpt) {
                            const odd = new Odd({
                                oddHouse: obj.games[id].odds.betpt.nome,
                                oddHome: obj.games[id].odds.betpt[1],
                                oddAway: obj.games[id].odds.betpt[2],
                                oddTie: obj.games[id].odds.betpt.x,
                                gameId: game.id
                            });
                            odd.save()
                                .then(data => {
                                    res.send(data);
                                }).catch(err => {
                                    res.status(500).send({
                                        message: err.message || "Some error occurred while creating the odd."
                                    });
                                });
                        }
                        if (obj.games[id].odds.casino) {
                            const odd = new Odd({
                                oddHouse: obj.games[id].odds.casino.nome,
                                oddHome: obj.games[id].odds.casino[1],
                                oddAway: obj.games[id].odds.casino[2],
                                oddTie: obj.games[id].odds.casino.x,
                                gameId: game.id
                            });
                            odd.save()
                                .then(data => {
                                    res.send(data);
                                }).catch(err => {
                                    res.status(500).send({
                                        message: err.message || "Some error occurred while creating the odd."
                                    });
                                });
                        }
                        if (obj.games[id].odds.placard) {
                            const odd = new Odd({
                                oddHouse: obj.games[id].odds.placard.nome,
                                oddHome: obj.games[id].odds.placard[1],
                                oddAway: obj.games[id].odds.placard[2],
                                oddTie: obj.games[id].odds.placard.x,
                                gameId: game.id
                            });
                            odd.save()
                                .then(data => {
                                    res.send(data);
                                }).catch(err => {
                                    res.status(500).send({
                                        message: err.message || "Some error occurred while creating the odd."
                                    });
                                });
                        }
                        res.end();
                    } else {
                        message: "Já existe esse jogo"
                        res.end();
                    }
                });
            }
        }
    });
};

// Retrieve and return all Games from the database.
exports.findAll = (req, res) => {
    Game.find()
        .then(games => {
            res.send(games);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving games."
            });
        });
};

// Find a single game with a gameId
exports.findOne = (req, res) => {
    Game.findById(req.params.gameId)
        .then(game => {
            if (!game) {
                return res.status(404).send({
                    message: "Game not found with id" + req.params.gameId
                });
            }
            res.send(game);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Game not found with id" + req.params.gameId
                });
            }
            return res.status(500).send({
                message: "Error retrieving game with id " + req.params.gameId
            });
        });
};

// Update a game identified by the gameId in the request
exports.update = (req, res) => {
    // Validate Request

    if (!req.body.teamHome) {
        return res.status(400).send({
            message: "Home team can not be empty"
        });
    } else if (!req.body.teamAway) {
        return res.status(400).send({
            message: "Away team can not be empty"
        });
    } else if (!req.body.score) {
        return res.status(400).send({
            message: "Score can not be empty"
        });
    } else if (!req.body.date) {
        return res.status(400).send({
            message: "Date can not be empty"
        })
    }

    //Find game and update it with the request body
    Game.findByIdAndUpdate(req.params.gameId, {
            date: req.body.date,
            score: req.body.score
        }, { new: true })
        .then(game => {
            if (!game) {
                return res.status(404).send({
                    message: "Game not found with id " + req.params.noteId
                });
            }
            res.send(game);
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {

                return res.status(404).send({
                    message: "Game not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error updating game with id " + req.params.noteId
            });
        });
};

// Delete a game with the specified gameId in the request
exports.delete = (req, res) => {
    Game.findByIdAndRemove(req.params.gameId)
        .then(game => {
            if (!game) {
                return res.status(404).send({
                    message: "Game not found with id " + req.params.gameId
                });
            }
            res.send({ message: "Game deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Game not found with id" + req.params.gameId
                });
            }
            return res.status(500).send({
                message: "Could not delete game with id " + req.params.gameId
            });
        });
};