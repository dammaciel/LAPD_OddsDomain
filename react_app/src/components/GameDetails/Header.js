import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSidePanel, addSelectedTeamInfo } from '../../actions/InterfaceActions';
import moment from 'moment';

class Header extends Component
{
    clickOnTeam(id)
    {
        this.props.changeSidePanel('team');
        this.props.addSelectedTeamInfo(
            {
                name: 'Sporting CP',
                shortName: 'SCP',
                manager: 'Jorge Jesus',
                stadium: 'Alvalade',
                country: 'Portugal',
                teamBadge: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Sporting_Clube_de_Portugal_%28Logo%29.svg/418px-Sporting_Clube_de_Portugal_%28Logo%29.svg.png', //url
                website: 'http://www.sporting.pt/',
            }
        );
    }

    render()
    {
        let game = this.props.game;

        let date = moment(game.date + " " + game.hour, "DD/MM/YYYY HH:mm");

        return(
            <div className="header">
                <h2 className="league">League</h2>
                <div className="matchup">
                    <div className="team" onClick={this.clickOnTeam.bind(this, 1)}>
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
                    <div className="team" onClick={this.clickOnTeam.bind(this, 1)}>
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
        addSelectedTeamInfo: addSelectedTeamInfo
    }
)(Header);
