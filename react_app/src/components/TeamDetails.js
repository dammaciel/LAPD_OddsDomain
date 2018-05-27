import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSidePanel, addSelectedPlayerInfo } from '../actions/InterfaceActions';

class TeamDetails extends Component
{
    clickOnPlayer()
    {
        this.props.changeSidePanel('player');
        this.props.addSelectedPlayerInfo(
            {
                name: 'Rui Patricio',
                nationality: 'Portugal',
                dataBorn: '01/01/0001',
                team: 'Sporting CP',
                description: '...',
                signing: '...',
                gender: 'Male',
                position: 'Goalkeeper',
                height: '1,91m',
                weight: '81 Kg',
                profilePic: 'http://img.fifa.com/images/fcc/2017/players/prt-3/269768.png'
            }
        );
    }

    render()
    {
        let team = this.props.team;
        if(team === null)
            return (
                <div></div>
            );
        else
            return(
                <div className="teamDetails">
                    <div className="header">
                        <img src={this.props.team.teamBadge} alt="Team Badge"/>
                        <div className="titles">
                            <h1>{this.props.team.name}</h1>
                            <h5>{this.props.team.shortName} - {this.props.team.country}</h5>
                        </div>
                    </div>
                    <div className="info">
                        <div className="infoItem">
                            <div className="label">Manager</div>
                            <div className="item">{this.props.team.manager}</div>
                        </div>
                        <div className="infoItem">
                            <div className="label">Stadium</div>
                            <div className="item">{this.props.team.stadium}</div>
                        </div>
                        <div className="infoItem">
                            <div className="label">Website</div>
                            <a className="item" href={this.props.team.website}>{this.props.team.website}</a>
                        </div>
                        <div className="infoItem">
                            <div className="label">Roster</div>
                            <ul className="item">
                                <li onClick={this.clickOnPlayer.bind(this)}>1. Rui Patricio</li>
                                <li>4. Sebastian Coates</li>
                                <li>5. Fábio Coentrão</li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
    }
};

export default connect(null,
    {
        changeSidePanel: changeSidePanel,
        addSelectedPlayerInfo: addSelectedPlayerInfo
    }
)(TeamDetails);