module.exports = (app) => {

    const games = require('../controllers/league.controller.js');

    // Create a new League
    app.post('/leagues', leagues.create);

    // Retrieve all League
    app.get('/leagues', leagues.findAll);

    // Retrieve a single League with LeagueId
    app.get('/leagues/:leaguesId', leagues.findOne);

    // Update a League with LeagueId
    app.put('/leagues/:leaguesId', leagues.update);

    // Delete a League with LeagueId
    app.delete('/leagues/:leaguesId', leagues.delete);
};