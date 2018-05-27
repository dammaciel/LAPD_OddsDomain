module.exports = (app) => {

    const teams = require('../controllers/team.controller.js');

    // Create a new Team
    app.post('/teams', teams.create);

    // Retrieve all Team
    app.get('/teams', teams.findAll);

    // Retrieve a single Team with TeamId
    app.get('/teams/:team', teams.findOne);

    // Update a Team with TeamId
    app.put('/teams/:teamId', teams.update);

    // Delete a Team with TeamId
    app.delete('/teams/:teamId', teams.delete);

    // Retrieve all Team Players
    app.get('/teams/:team/players', teams.findAllPlayers);
};