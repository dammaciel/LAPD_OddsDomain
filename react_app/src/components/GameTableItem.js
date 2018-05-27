import React, { Component } from 'react';
import moment from 'moment';

class GameTableItem extends Component
{
    render()
    {
        const data = this.props.data;
        let date = moment(this.props.data.date + " " + this.props.data.hour, "DD/MM/YYYY HH:mm");

        let homeCrest = '/logo.png', awayCrest = '/logo.png';
        let homeTeam = this.props.teams.find((team) => team.name === data.teamHome);
        if(homeTeam !== undefined)
            homeCrest = homeTeam.teamBadge;

        let awayTeam = this.props.teams.find((team) => team.name === data.teamAway);
        if(awayTeam !== undefined)
            awayCrest = awayTeam.teamBadge;

        return (
            <div className="gameTableItem" onClick={this.props.click}>
                <div className="time">
                    <div className="hours">{date.format('HH:mm')}</div>
                    <div className="day">{date.format('D MMM')}</div>
                </div>
                <div className="scoreInfo">
                    <div className="team home">
                        <img className="crest" src={homeCrest} alt="teamCrest"/>
                        <h3 className="name">{data.teamHome}</h3>
                    </div>
                    <div className="score">
                        - : -
                    </div>
                    <div className="team away">
                        <h3 className="name">{data.teamAway}</h3>
                        <img className="crest" src={awayCrest} alt="teamCrest"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameTableItem;
