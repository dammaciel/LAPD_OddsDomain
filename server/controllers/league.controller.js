const League = require('../models/league.model.js');

const fs = require('fs');

exports.create = (req, res) => {

    fs.readFile('resources/leagues.json', function(err, data) {
        if (err) {
            console.log('Error Reading File with Leagues', err);
            res.sendStatus(500);
        } else {
            var obj = JSON.parse(data);
            //console.log(obj);
            // console.log(Object.keys(obj.leagues).length);
            for (var id = 0; id < Object.keys(obj.leagues).length; id++) {
                console.log("Tipo: ", obj.leagues[id].strSport);
                if (obj.leagues[id].strSport == "Soccer") {
                    League.findOne({ apiID: obj.leagues[id].id }, function(err, doc) {
                        id = id - 1;
                        if (err)
                            console.log(err);
                        if (doc === null) {
                            const league = new League({
                                apiID: ob.leagues[id].id,
                                name: String,
                                formedYear: String,
                                country: String,
                                description: String,
                                website: String,
                                logo: String, //url
                                tropheyImage: String,
                            })
                        }
                    });

                } else {
                    return;
                }
                /**Game.findOne({ apiID: obj.games[id].id }, function(err, doc) {
                    id = id - 1;
                    if (err)
                        console.log(err);
                    if (doc === null) {
                        const league = new League({
                            apiID: obj.games[id].id,
                            teamHome: obj.games[id].jogo[1],
                            teamAway: obj.games[id].jogo[2],
                            score: "0-0",
                            date: obj.games[id].date,
                            hour: obj.games[id].time
                        });
                        league.save()
                            .then(data => {
                                res.send(data);
                            }).catch(err => {
                                res.status(500).send({
                                    message: err.message || "Some error occurred while creating the Game."
                                });
                            });

                        res.end();
                    } else {
                        message: "Já existe essa liga"
                        res.end();
                    }
                }); */
            }
        }
    });
};