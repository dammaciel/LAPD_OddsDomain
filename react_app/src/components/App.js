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
        /*axios.get('https://still-reef-29535.herokuapp.com/api/games/')
            .then((response) => 
            {
                this.props.addGames(response.data.games.slice(0, 10));
            });*/
        this.props.addGames([{
            "date": "21/04/2018", 
            "id": "11830712", 
            "jogo": {
              "1": "West Bromwich Albion", 
              "2": "Liverpool"
            }, 
            "liga": "Premier Lg.", 
            "odds": {
              "betclic": {
                "1": 7.75, 
                "2": 1.35, 
                "nome": "betclic", 
                "x": 4.75
              }, 
              "casino": {
                "1": 7.5, 
                "2": 1.33, 
                "nome": "casino", 
                "x": 4.5
              }
            }, 
            "pais": "Inglaterra", 
            "time": "16:30", 
            "today": "15:15:50"
          }, 
          {
            "date": "21/04/2018", 
            "id": 1687956, 
            "jogo": {
              "1": "Chrobry Glogow", 
              "2": "GKS Katowice"
            }, 
            "liga": "1.ª Liga", 
            "odds": {
              "betclic": {
                "1": 2.25, 
                "2": 2.5, 
                "nome": "betclic", 
                "x": 2.8
              }, 
              "betpt": {
                "1": 2.18, 
                "2": 2.49, 
                "nome": "betpt", 
                "x": 2.86
              }, 
              "nossaaposta": {
                "1": 2.13, 
                "2": 2.42, 
                "nome": "nossaaposta", 
                "x": 2.77
              }
            }, 
            "pais": "Polónia", 
            "time": "16:45", 
            "today": "15:15:50"
          }, 
          {
            "date": "21/04/2018", 
            "id": "14083435", 
            "jogo": {
              "1": "Oud-Heverlee Leuven", 
              "2": "Mouscron Péruwelz"
            }, 
            "liga": "Divisão 1A", 
            "odds": {
              "betclic": {
                "1": 2.0, 
                "2": 2.9, 
                "nome": "betclic", 
                "x": 3.0
              }, 
              "casino": {
                "1": 2.1, 
                "2": 3.0, 
                "nome": "casino", 
                "x": 3.2
              }
            }, 
            "pais": "Bélgica", 
            "time": "17:00", 
            "today": "15:15:50"
          }, 
          {
            "date": "21/04/2018", 
            "id": "12090266", 
            "jogo": {
              "1": "Sassuolo", 
              "2": "Fiorentina"
            }, 
            "liga": "Serie A", 
            "odds": {
              "betclic": {
                "1": 2.85, 
                "2": 2.4, 
                "nome": "betclic", 
                "x": 3.1
              }, 
              "betpt": {
                "1": 2.76, 
                "2": 2.25, 
                "nome": "betpt", 
                "x": 2.84
              }, 
              "casino": {
                "1": 2.88, 
                "2": 2.38, 
                "nome": "casino", 
                "x": 3.0
              }, 
              "casinosol": {
                "1": 3.6, 
                "2": 2.07, 
                "nome": "casinosol", 
                "x": 3.45
              }, 
              "nossaaposta": {
                "1": 2.97, 
                "2": 2.39, 
                "nome": "nossaaposta", 
                "x": 3.05
              }, 
              "placard": {
                "1": 2.86, 
                "2": 2.32, 
                "nome": "placard", 
                "x": 3.03
              }
            }, 
            "pais": "Itália", 
            "time": "17:00", 
            "today": "15:15:50"
          }]);
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
