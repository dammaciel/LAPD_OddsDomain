import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSelectedPlayer } from '../actions/InterfaceActions';

class TeamDetails extends Component
{
    clickOnPlayer(id)
    {
        this.props.changeSelectedPlayer(id);
    }

    render()
    {
        let team = this.props.team;
        if(team === null || team === undefined)
            return (
                <div></div>
            );
        else
        {
            let manager = null;
            if(this.props.team.manager)
                manager = (
                <div className="infoItem">
                    <div className="label">Manager</div>
                    <div className="item">{this.props.team.manager}</div>
                </div>);

            let stadium = null;
            if(this.props.team.stadium)
                stadium = (
                <div className="infoItem">
                    <div className="label">Stadium</div>
                    <div className="item">{this.props.team.stadium}</div>
                </div>);

            let website = null;
            if(this.props.team.website)
                website = (
                <div className="infoItem">
                    <div className="label">Website</div>
                    <a className="item" href={`http://${this.props.team.website}`}>{this.props.team.website}</a>
                </div>);

            let roster = null;
            if(this.props.team.roster)
            {
                let players = this.props.team.roster.map((player, index) => (<li onClick={this.clickOnPlayer.bind(this, index)} key={index}>{player.name}</li>))
                roster = (
                <div className="infoItem">
                    <div className="label">Roster</div>
                    <ul className="item">
                        {players}
                    </ul>
                </div>);
            }

            return(
                <div className="teamDetails">
                    <div className="header">
                        <img src={this.props.team.teamBadge} alt="Team Badge"/>
                        <div className="titles">
                            <h1>{this.props.team.name}</h1>
                            <h5>{this.props.team.country}</h5>
                        </div>
                    </div>
                    <div className="info">
                        {manager}
                        {stadium}
                        {website}
                        {roster}
                    </div>
                </div>
            );
        }
    }
};

export default connect(null,
    {
        changeSelectedPlayer: changeSelectedPlayer
    }
)(TeamDetails);