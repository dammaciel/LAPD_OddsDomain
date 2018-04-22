import React, { Component } from 'react';

import Header from './Header';
import OddsTable from './OddsTable';

export default class extends Component
{
    render()
    {
        let game = this.props.game;
        if(game === undefined)
        {
            return (
                <div className="gameDetails">
                </div>
            );
        }
        else
        {
            return(
                <div className="gameDetails">
                    <Header game={game}></Header>
                    <OddsTable odds={game.odds}/>
                </div>
            )
        }
    }
};