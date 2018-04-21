import React, { Component } from 'react';
import '../styles/App.css';
import GameTable from './GameTable';

import { connect } from 'react-redux';
import { addGames } from '../actions/gameActions';

class App extends Component 
{
    render() 
    {
        return (
            <div className="App">
                <GameTable games={this.props.games}></GameTable>
            </div>
        );
    }

    componentDidMount()
    {
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
          }]);
    }
}

export default connect(
    (state) => 
    {
        return {
            games: state.games
        };
    },
    {
        addGames: addGames
    }
)(App);
