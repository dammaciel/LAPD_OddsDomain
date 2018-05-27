const rp = require('request-promise');
const League = require('../models/league.model.js');

const fs = require('fs');

function getLeagues() {
    console.log("Entrando no getLeagues");
    return rp({
            method: 'GET',
            uri: ' https://www.thesportsdb.com/api/v1/json/1/all_leagues.php',
            json: true,
            simple: true
        }).then((response) => {
            return new Promise(function(resolve, reject) {
                fs.writeFile('resources/leagues.json', JSON.stringify(response), (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(response)
                    }
                })
            })
        })
        .catch((err) => {
            return Promise.reject(err);
        })
}

function getSoccerLeagues() {
    console.log("Entrando no getSoccerLeagues");
    fs.readFile('resources/leagues.json', function(err, data) {
        if (err) {
            console.log('Error Reading File with Leagues', err);
            res.sendStatus(500);
        } else {
            var obj = JSON.parse(data);
            for (var id = 0; id < Object.keys(obj.leagues).length; id++) {
                var apiID = obj.leagues[id].idLeague;
                var leagueType = obj.leagues[id].strSport;
                if (leagueType === "Soccer") {
                    rp({
                            method: 'GET',
                            uri: ' https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=' + apiID,
                            json: true,
                            simple: true
                        }).then((response) => {
                            new Promise(function(resolve, reject) {
                                fs.appendFile('resources/soccerLeagues.json', JSON.stringify(response), (err) => {
                                    if (err) {
                                        reject(err);
                                    } else {
                                        resolve(response)
                                    }
                                })
                            })
                        })
                        .catch((err) => {
                            return Promise.reject(err);
                        });
                }
            };
        }
    });
}

function getTeams() {
    console.log("Entrando no getTeams");
    rp({
            method: 'GET',
            uri: 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4429',
            json: true,
            simple: true
        }).then((response) => {
            new Promise(function(resolve, reject) {
                fs.appendFile('resources/teams.json', JSON.stringify(response), (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(response)
                    }
                })
            })
        })
        .catch((err) => {
            return Promise.reject(err);
        })
}
/*
function getPlayer() {
    console.log("Entrando no getPlayer");
    fs.readFile('resources/teams.json', function(err, data) {
        if (err) {
            console.log('Error Reading File with Teams', err);
            res.sendStatus(500);
        } else {
            var obj = JSON.parse(data);
            for (var id = 0; id < Object.keys(obj.teams).length; id++) {
                var teamName = obj.teams[id].strTeam;
                rp({
                        method: 'GET',
                        uri: ' https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=' + teamName,
                        json: true,
                        simple: true
                    }).then((response) => {
                        new Promise(function(resolve, reject) {
                            fs.appendFile('resources/player.json', JSON.stringify(response), (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(response)
                                }
                            })
                        })
                    })
                    .catch((err) => {
                        return Promise.reject(err);
                    })
            }
        }
    });
}*/

module.exports = {
    getLeagues,
    getSoccerLeagues,
    getTeams,
    // getPlayer
}