var express = require('express');
var router = express.Router();
const portugalodds = require('../request/portugalodds');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({ "message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes." });

});

router.get('/refresh', function(req, res) {
    Promise.all([portugalodds.getGames()])
        .then(() => {
            res.sendStatus(200);
        })
        .catch(() => {
            res.sendStatus(500);
        })
})

router.get('/gameOdds', function(req, res) {
    fs.readFile('resources/games.json', function(err, data) {
        if (err) {
            console.log('Error Reading File with Games', err);
            res.sendStatus(500);
        } else {
            obj = JSON.parse(data);
            for (var id = 0; id < 3; id++) {
                console.log("data: ", obj.games[id].date);
                console.log("Home Team", obj.games[id].jogo[1]);
                console.log("Away Team", obj.games[id].jogo[2]);
            }
            //res.json(JSON.parse(data));
        }
    })
});


module.exports = router;