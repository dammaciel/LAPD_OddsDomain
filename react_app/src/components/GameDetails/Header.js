import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSidePanel, changeSelectedTeamInfo } from '../../actions/InterfaceActions';
import moment from 'moment';

class Header extends Component
{
    clickOnTeam(teamName)
    {
        this.props.changeSidePanel('team');
    }

    render()
    {
        let game = this.props.game;

        let date = moment(game.date + " " + game.hour, "DD/MM/YYYY HH:mm");

        return(
            <div className="header">
                <h2 className="league">League</h2>
                <div className="matchup">
                    <div className="team" onClick={this.clickOnTeam.bind(this, game.teamHome)}>
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
                    <div className="team" onClick={this.clickOnTeam.bind(this, game.teamAway)}>
                        <img src="/logo.png" alt="crest"/>
                        <h3>{game.teamAway}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,
    {
        changeSidePanel: changeSidePanel,
        changeSelectedTeamInfo: changeSelectedTeamInfo
    }
)(Header);
