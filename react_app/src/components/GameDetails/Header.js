import React, { Component } from 'react';
import moment from 'moment';

class Header extends Component
{
    render()
    {
        let game = this.props.game;

        let date = moment(game.date, "DD/MM/YYYY");

        return(
            <div className="header">
                <h2 className="league">League</h2>
                <div className="matchup">
                    <div className="team">
                        <img src="/logo.png" alt="crest"/>
                        <h3>{game.teamHome}</h3>
                    </div>
                    <div className="details">
                        <div className="time">
                            {date.format('D MMM') + " at "}
                            <strong>{date.format('HH:MM')}</strong>
                        </div>
                        <div className="score">
                            - : -
                        </div>
                    </div>
                    <div className="team">
                        <img src="/logo.png" alt="crest"/>
                        <h3>{game.teamAway}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;