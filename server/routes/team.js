module.exports = (app) => {

    const games = require('../controllers/team.controller.js');

    // Create a new Team
    app.post('/teams', teams.create);

    // Retrieve all Team
    app.get('/teams', teams.findAll);

    // Retrieve a single Team with TeamId
    app.get('/teams/:teamId', teams.findOne);

    // Update a Team with TeamId
    app.put('/teams/:teamId', teams.update);

    // Delete a Team with TeamId
    app.delete('/teams/:teamId', teams.delete);
};