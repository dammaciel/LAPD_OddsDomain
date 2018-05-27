import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSelectedTeam } from '../actions/InterfaceActions';

class PlayerDetails extends Component
{
    clickOnTeam(id)
    {
        this.props.changeSelectedTeamInfo(
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
        let player = this.props.player;
        if(player === null)
            return (
                <div></div>
            );
        else
            return(
                <div className="playerDetails">
                    <div className="header">
                        <img src={this.props.player.profilePic} alt="Player Profile"/>
                        <h1>{this.props.player.name}</h1>
                        <h5>{this.props.player.nationality}</h5>
                    </div>
                    <div className="info">
                        <div className="infoItem">
                            <div className="label">Position</div>
                            <div className="item">{this.props.player.position}</div>
                        </div>
                        <div className="infoItem">
                            <div className="label">Roster</div>
                            <ul className="item">
                                <li onClick={this.clickOnTeam.bind(this, 1)}>{this.props.player.team}</li>
                            </ul>
                        </div>
                        <div className="infoItem">
                            <div className="label">Weight</div>
                            <div className="item">{this.props.player.weight}</div>
                        </div>
                        <div className="infoItem">
                            <div className="label">Height</div>
                            <div className="item">{this.props.player.height}</div>
                        </div>
                    </div>
                </div>
            );
    }
};

export default connect(null,
    {
        changeSelectedTeam: changeSelectedTeam
    }
)(PlayerDetails);