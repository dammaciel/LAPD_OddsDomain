import React, { Component } from 'react';
import moment from 'moment';

class Header extends Component
{
    render()
    {
        let game = this.props.game;

        let date = moment(game.date + " " + game.time, "DD/MM/YYYY HH:mm");

        return(
            <div className="header">
                <h2 className="league">{game.liga + " - " + game.pais}</h2>
                <div className="matchup">
                    <div className="team">
                        <img src="/logo.png" alt="crest"/>
                        <h3>{game.jogo[1]}</h3>
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
                        <h3>{game.jogo[2]}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;