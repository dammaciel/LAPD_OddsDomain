const rp = require('request-promise');
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
            console.log(obj.leagues.length);
            for (var id = 0; id < obj.leagues.length; id++) {
                var apiID = obj.leagues[id].idLeague;
                //var leagueType = obj.leagues[id].strSport;
                console.log("ids", apiID);
                if (obj.leagues[id].strSport === "Soccer") {
                    console.log("id de bola antes de escrever", apiID);
                    rp({
                            method: 'GET',
                            uri: ' https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=' + apiID,
                            json: true,
                            simple: true
                        }).then((response) => {
                            console.log("coisa");
                            new Promise(function(resolve, reject) {
                                console.log("id de bola", apiID);
                                console.log(' https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=', apiID);
                                fs.writeFile('resources/soccerLeagues.json', JSON.stringify(response), (err) => {
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
        }
    });
}


function getTeams() {
    console.log("Entrando no getTeams");
    fs.readFile('resources/leagues.json', function(err, data) {
        if (err) {
            console.log('Error Reading File with Leagues', err);
            res.sendStatus(500);
        } else {
            var obj = JSON.parse(data);
            for (var id = 0; id < obj.leagues.length; id++) {
                var leagueName = obj.leagues[id].strLeague;
                rp({
                        method: 'GET',
                        uri: ' https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=' + leagueName,
                        json: true,
                        simple: true
                    }).then((response) => {
                        new Promise(function(resolve, reject) {
                            console.log("writing on file");
                            fs.writeFile('resources/teams.json', JSON.stringify(response), (err) => {
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
}

module.exports = {
    getLeagues,
    getSoccerLeagues,
    getTeams
}