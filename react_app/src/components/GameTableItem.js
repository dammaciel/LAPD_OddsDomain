import React, { Component } from 'react';
import moment from 'moment';

function getOdds(odds) 
{
    let bestOdds = [0, 0, 0];
    for(let odd in odds)
    {
        if(odds[odd][1] > bestOdds[0])
            bestOdds[0] = odds[odd][1];

        if(odds[odd].x > bestOdds[1])
            bestOdds[1] = odds[odd].x;

        if(odds[odd][2] > bestOdds[2])
            bestOdds[2] = odds[odd][2];
    }

    return bestOdds;
}

class GameTableItem extends Component
{
    render()
    {
        const data = this.props.data;
        // let date = moment(this.props.data.date + " " + this.props.data.time, "DD/MM/YYYY HH:mm");
        // let odds = getOdds(data.odds);

        return (
            <div className="gameTableItem" onClick={this.props.click}>
                <div className="time">
                    <div className="hours">00:00</div>
                    <div className="day">{data.date}</div>
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
                <div className="odds">
                    <div className="odds-1">
                        1.00
                    </div>
                    <div className="odds-x">
                        1.00
                    </div>
                    <div className="odds-2">
                        1.00 
                    </div>
                </div>
            </div>
        );
    }
}

export default GameTableItem;
