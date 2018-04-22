import React, { Component } from 'react';
import moment from 'moment';

class GameTableItem extends Component
{
    render()
    {
        const data = this.props.data;
        let date = moment(this.props.data.date + " " + this.props.data.hour, "DD/MM/YYYY HH:mm");
        // let odds = getOdds(data.odds);

        return (
            <div className="gameTableItem" onClick={this.props.click}>
                <div className="time">
                    <div className="hours">{date.format('HH:mm')}</div>
                    <div className="day">{date.format('D MMM')}</div>
                </div>
                <div className="scoreInfo">
                    <div className="team home">
                        <img className="crest" src="/logo.png" alt="teamCrest"/>
                        <h3 className="name">{data.teamHome}</h3>
                    </div>
                    <div className="score">
                        - : -
                    </div>
                    <div className="team away">
                        <h3 className="name">{data.teamAway}</h3>
                        <img className="crest" src="/logo.png" alt="teamCrest"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameTableItem;
