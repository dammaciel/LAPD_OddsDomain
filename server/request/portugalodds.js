const rp = require('request-promise');
const fs = require('fs');

function getGames() {
    console.log("Entrando no getGames");
    return rp({
            method: 'GET',
            uri: 'https://still-reef-29535.herokuapp.com/api/games/',
            json: true,
            simple: true
        }).then((response) => {
            return new Promise(function(resolve, reject) {
                fs.writeFile('resources/games.json', JSON.stringify(response), (err) => {
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

module.exports = {
    getGames
}