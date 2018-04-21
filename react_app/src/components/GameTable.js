import React, { Component } from 'react';
import GameTableItem from './GameTableItem';

class GameTable extends Component
{
    changeSelectedGame(index)
    {
        this.props.changeSelectedGame(index);
    }

    render()
    {
        const items = this.props.games.map((game, index) =>
        {
           return (<GameTableItem click={this.changeSelectedGame.bind(this, index)} data={game} key={index}></GameTableItem>) 
        });

        return (
            <div className="gameTable" >
                <div className="gameTableHeader">
                    <div className="title">
                        Past Games
                    </div>
                    <div className="odds">
                        <div className="odds-1">
                            1
                        </div>
                        <div className="odds-x">
                            X
                        </div>
                        <div className="odds-2">
                            2
                        </div>
                    </div>
                </div>
                {items}
            </div>
        );
    }
}

export default GameTable;
