const Odd = require('../models/odd.model.js');

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