import React, { Component } from 'react';
import GameTableItem from './GameTableItem';
import axios from 'axios';

class GameTable extends Component
{
    changeSelectedGame(index, id)
    {
        this.props.changeSelectedGame(index);
        axios.get('http://localhost:3000/odds/' + id)
            .then((response) => 
            {
                this.props.addOddsToGame({odds: response.data}, index);
            });
    }

    render()
    {
        const items = this.props.games.map((game, index) =>
        {
           return (<GameTableItem teams={this.props.teams} click={this.changeSelectedGame.bind(this, index, game._id)} data={game} key={index}></GameTableItem>) 
        });

        return (
            <div className="gameTable" >
                <div className="gameTableHeader">
                    <div className="title">
                        World Cup Games
                    </div>
                </div>
                {items}
            </div>
        );
    }
}

export default GameTable;
