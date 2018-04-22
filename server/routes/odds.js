module.exports = (app) => {

    const odds = require('../controllers/odd.controller.js');

    // Create a new odd
    // app.post('/odds', odds.create);
    // Update a Odd with oddId
    app.put('/odds/:oddId', odds.update);
    // Find Odds with gameId
    app.get('/odds/:gameId', odds.findByGame);
};