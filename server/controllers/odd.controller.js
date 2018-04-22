const Odd = require('../models/odd.model.js');
const fs = require('fs');
// Create and Save a new odd
exports.create = (req, res) => {
    fs.readFile('resources/games.json', function(err, data) {
        if (err) {
            console.log('Error Reading File with Games', err);
            res.sendStatus(500);
        } else {
            var obj = JSON.parse(data);
            for (var id = 0; id < 1; id++) {
                if (obj.games[id].odds.betclic) {
                    const odd = new Odd({
                        oddHouse: obj.games[id].odds.betclic.nome,
                        oddHome: obj.games[id].odds.betclic[1],
                        oddAway: obj.games[id].odds.betclic[2],
                        oddTie: obj.games[id].odds.betclic.x,
                        gameId: req.body.gameId
                    });
                    console.log(odd);
                    /*odd.save()
                    .then(data => {
                        res.send(data);
                    }).catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating the odd."
                        });
                    });*/

                }
                if (obj.games[id].odds.betpt) {
                    const odd = new Odd({
                        oddHouse: obj.games[id].odds.betpt.nome,
                        oddHome: obj.games[id].odds.betpt[1],
                        oddAway: obj.games[id].odds.betpt[2],
                        oddTie: obj.games[id].odds.betpt.x,
                        gameId: req.body.gameId
                    });
                    console.log(odd);
                    /*odd.save()
                    .then(data => {
                        res.send(data);
                    }).catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating the odd."
                        });
                    });*/
                }
                if (obj.games[id].odds.casino) {
                    const odd = new Odd({
                        oddHouse: obj.games[id].odds.casino.nome,
                        oddHome: obj.games[id].odds.casino[1],
                        oddAway: obj.games[id].odds.casino[2],
                        oddTie: obj.games[id].odds.casino.x,
                        gameId: req.body.gameId
                    });
                    console.log(odd);
                    /*odd.save()
                    .then(data => {
                        res.send(data);
                    }).catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating the odd."
                        });
                    });*/
                }
                if (obj.games[id].odds.placard) {
                    const odd = new Odd({
                        oddHouse: obj.games[id].odds.placard.nome,
                        oddHome: obj.games[id].odds.placard[1],
                        oddAway: obj.games[id].odds.placard[2],
                        oddTie: obj.games[id].odds.placard.x,
                        gameId: req.body.gameId
                    });
                    console.log(odd);
                    /*odd.save()
                    .then(data => {
                        res.send(data);
                    }).catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating the odd."
                        });
                    });*/
                }
            }
        }
    });

    /*
    if (!req.body.oddHouse) {
        return res.status(400).send({
            message: "Odd house can not be empty"
        });
    } else if (!req.body.oddHome) {
        return res.status(400).send({
            message: "odd Home team can not be empty"
        });
    } else if (!req.body.oddAway) {
        return res.status(400).send({
            message: "odd away team can not be empty"
        });
    } else if (!req.body.oddTie) {
        return res.status(400).send({
            message: "odd for tie can not be empty"
        });
    } else if (!req.body.gameId) {
        return res.status(400).send({
            message: "Game can not be empty"
        });
    }

    const odd = new Odd({
        oddHouse: req.body.oddHouse,
        oddHome: req.body.oddHome,
        oddAway: req.body.oddAway,
        oddTie: req.body.oddTie,
        gameId: req.body.gameId,
    });
    // Save odd in the database

    odd.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the odd."
            });
        });*/
};

exports.update = (req, res) => {
    // Validate Request
    if (!req.body.oddHouse) {
        return res.status(400).send({
            message: "Odd house can not be empty"
        });
    } else if (!req.body.oddHome) {
        return res.status(400).send({
            message: "odd Home team can not be empty"
        });
    } else if (!req.body.oddAway) {
        return res.status(400).send({
            message: "odd away team can not be empty"
        });
    } else if (!req.body.oddTie) {
        return res.status(400).send({
            message: "odd for tie can not be empty"
        });
    } else if (!req.body.gameId) {
        return res.status(400).send({
            message: "Game can not be empty"
        });
    }
    //Find odd and update it with the request body
    Odd.findByIdAndUpdate(req.params.oddId, {
            oddHome: req.body.oddHome,
            oddAway: req.body.oddAway,
            oddTie: req.body.oddTie,
        }, { new: true })
        .then(odd => {
            if (!odd) {
                return res.status(404).send({
                    message: "Odd not found with id" + req.params.oddId
                });
            }
            res.send(odd);
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "odd not found with id" + req.params.oddId
                });
            }
            return res.status(500).send({
                message: "Error updating odd with id " + req.params.oddId
            });
        });
};

// Retrieve and return all Odds from a certain game from the database.
exports.findByGame = (req, res) => {
    Odd.find({ 'gameId': req.params.gameId })
        .then(odds => {
            res.send(odds);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving odds."
            });
        });
};