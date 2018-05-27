module.exports = (app) => {

    const player = require('../controllers/player.controller.js');

    // Create a new Player
    app.post('/player', player.create);

    // Retrieve all Player
    app.get('/player', player.findAll);

    // Retrieve a single Player with PlayerID
    app.get('/player/:player', player.findOne);

    // Update a Player with PlayerId
    // app.put('/player/:playerId', player.update);

    // Delete a Player with PlayerId
    app.delete('/player/:playerId', player.delete);
};