import React, { Component } from 'react';
import '../styles/App.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameTable from './GameTable';
import SidePanel from './SidePanel';
import { connect } from 'react-redux';
import { addGames, addOddsToGame } from '../actions/GameActions';
import { addTeams, addPlayersToTeam } from '../actions/TeamActions';
import { changeSelectedGame, changeSelectedTeam } from '../actions/InterfaceActions';
import axios from 'axios';
import { Typeahead } from 'react-bootstrap-typeahead';

class App extends Component
{
    render()
    {
        return (
            <div className="App">
                <nav className="Navbar">
                    <h1>OddsDomain</h1>
                    <div className="search-container">
                        <Typeahead
                            onChange={selected => {
                                let teamId = this.props.teams.findIndex((team) => team.name === selected[0]);
                                if(teamId !== -1)
                                {
                                    this.props.changeSelectedTeam(teamId)
                                    axios.get(`http://localhost:3000/teams/${this.props.teams[teamId].name}/players`)
                                        .then((response) =>
                                        {
                                            this.props.addPlayersToTeam(response.data, teamId);
                                        });
                                }
                            }}
                            options={this.props.teams.map((team) => team.name)}
                        />
                    </div>
                </nav>
                <GameTable games={this.props.games} teams={this.props.teams} changeSelectedGame={this.props.changeSelectedGame} addOddsToGame={this.props.addOddsToGame}></GameTable>
                <SidePanel games={this.props.games} ui={this.props.ui} teams={this.props.teams}/>
            </div>
        );
    }

    componentDidMount()
    {
        axios.get('http://localhost:3000/games')
        .then((response) =>
        {
            this.props.addGames(response.data);
        });

        axios.get('http://localhost:3000/teams/')
        .then((response) =>
        {
            this.props.addTeams(response.data);
        });

    }
}

export default connect(
    (state) =>
    {
        return {
            games: state.games,
            teams: state.teams,
            ui: state.ui
        };
    },
    {
        addGames: addGames,
        addOddsToGame: addOddsToGame,
        changeSelectedGame: changeSelectedGame,
        addTeams: addTeams,
        changeSelectedTeam: changeSelectedTeam,
        addPlayersToTeam: addPlayersToTeam
    }
)(App);
