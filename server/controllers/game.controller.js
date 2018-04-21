const Game = require('../models/game.model.js');

// Create and Save a new Game
exports.create = (req, res) => {
    console.log(req.body);

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

    const game = new Game({
        teamHome: req.body.teamHome,
        teamAway: req.body.teamAway,
        score: req.body.score,
        date: req.body.date
    });
    // Save Game in the database

    game.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Game."
            });
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