module.exports = (app) => {

    const games = require('../controllers/game.controller.js');

    // Create a new Game
    app.post('/games', games.create);

    // Retrieve all games
    app.get('/games', games.findAll);

    // Retrieve a single Game with gameId
    app.get('/games/:gameId', games.findOne);

    // Update a Game with gameId
    app.put('/games/:gameId', games.update);

    // Delete a Game with gameId
    app.delete('/games/:gameId', games.delete);
};