import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSelectedTeam } from '../../actions/InterfaceActions';
import moment from 'moment';

class Header extends Component
{
    clickOnTeam(teamId)
    {
        this.props.changeSelectedTeam(teamId);
    }

    render()
    {
        let game = this.props.game;
        let date = moment(game.date + " " + game.hour, "DD/MM/YYYY HH:mm");
        let homeCrest = '/logo.png', awayCrest = '/logo.png';
        
        let homeTeam = this.props.teams.findIndex((team) => team.name === game.teamHome)
        if(this.props.teams[homeTeam] !== undefined)
            homeCrest = this.props.teams[homeTeam].teamBadge;

        let awayTeam = this.props.teams.findIndex((team) => team.name === game.teamAway)
        if(this.props.teams[awayTeam] !== undefined)
            awayCrest = this.props.teams[awayTeam].teamBadge;

        return(
            <div className="header">
                <h2 className="league">World Cup</h2>
                <div className="matchup">
                    <div className="team" onClick={this.clickOnTeam.bind(this, homeTeam)}>
                        <img src={homeCrest} alt="crest"/>
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
                    <div className="team" onClick={this.clickOnTeam.bind(this, awayTeam)}>
                        <img src={awayCrest} alt="crest"/>
                        <h3>{game.teamAway}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) =>
    {
        return {
            teams: state.teams
        };
    },
    {
        changeSelectedTeam: changeSelectedTeam
    }
)(Header);
