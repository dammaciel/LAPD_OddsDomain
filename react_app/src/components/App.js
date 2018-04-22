import React, { Component } from 'react';
import '../styles/App.css';
import GameTable from './GameTable';
import GameDetails from './GameDetails';
import { connect } from 'react-redux';
import { addGames } from '../actions/GameActions';
import { changeSelectedGame } from '../actions/InterfaceActions';
import axios from 'axios';

class App extends Component 
{
    render() 
    {
        return (
            <div className="App">
                <GameTable games={this.props.games} changeSelectedGame={this.props.changeSelectedGame}></GameTable>
                <GameDetails game={this.props.games[this.props.ui.selectedGame]}></GameDetails>
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
                this.props.addGames(response.data.splice(0, 20));
            });
    }
}

export default connect(
    (state) => 
    {
        return {
            games: state.games,
            ui: state.ui
        };
    },
    {
        addGames: addGames,
        changeSelectedGame: changeSelectedGame
    }
)(App);
