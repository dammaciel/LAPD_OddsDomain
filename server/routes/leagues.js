module.exports = (app) => {

    const leagues = require('../controllers/league.controller.js');

    // Create a new League
    app.post('/leagues', leagues.create);

    // Retrieve all leagues
    app.get('/leagues', leagues.findAll);

    // Retrieve a single League with LeagueId
    app.get('/leagues/:leagueId', leagues.findOne);

    // Delete a League with LeagueId
    app.delete('/leagues/:leagueId', leagues.delete);
};