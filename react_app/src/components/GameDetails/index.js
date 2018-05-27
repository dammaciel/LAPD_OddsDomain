import React, { Component } from 'react';

import Header from './Header';
import OddsTable from './OddsTable';

export default class extends Component
{
    render()
    {
        return(
            <div className="gameDetails">
                <Header game={this.props.game}></Header>
                <OddsTable odds={this.props.game.odds}/>
            </div>
        )
    }
};