import React, { Component } from 'react';
import '../styles/App.css';
import GameTable from './GameTable';
import SidePanel from './SidePanel';
import { connect } from 'react-redux';
import { addGames, addOddsToGame } from '../actions/GameActions';
import { addTeams } from '../actions/TeamActions';
import { changeSelectedGame } from '../actions/InterfaceActions';
import axios from 'axios';
import Search from 'react-search-box';

class App extends Component
{
    render()
    {
        return (
            <div className="App">
                <nav className="Navbar">
                    <h1>OddsDomain</h1>
                    <Search
                        data={ this.state.data }
                        onChange={ this.handleChange.bind(this) }
                        placeholder="Search for a string..."
                        class="search-class"
                        searchKey="full_name"
                    />
                </nav>
                <GameTable games={this.props.games} changeSelectedGame={this.props.changeSelectedGame} addOddsToGame={this.props.addOddsToGame}></GameTable>
                <SidePanel games={this.props.games} ui={this.props.ui}/>
            </div>
        );
    }

    componentDidMount()
    {
        axios.get('http://localhost:3000/games', {
            headers: {
              'Access-Control-Allow-Origin': '*',
            }})
            .then((response) =>
            {
                this.props.addGames(response.data.splice(204,224));
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
        addTeams: addTeams
    }
)(App);
