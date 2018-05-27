import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSelectedTeam } from '../actions/InterfaceActions';

class PlayerDetails extends Component
{
    clickOnTeam(id)
    {
        this.props.changeSelectedTeam(null);
    }

    render()
    {
        let player = this.props.player;
        if(player === null)
            return (
                <div></div>
            );
        else
        {

            let position = null;
            if(this.props.player.position)
                position = (<div className="infoItem">
                    <div className="label">Position</div>
                    <div className="item">{this.props.player.position}</div>
                </div>);

            let weigth = null;
            if(this.props.player.weigth)
                weigth = (<div className="infoItem">
                    <div className="label">Weight</div>
                    <div className="item">{this.props.player.weigth}</div>
                </div>);

            let height = null;
            if(this.props.player.height)
                height = (<div className="infoItem">
                    <div className="label">Height</div>
                    <div className="item">{this.props.player.height}</div>
                </div>);

            let roster = null;
            if(this.props.player.team)
            roster = (<div className="infoItem">
                    <div className="label">Roster</div>
                    <ul className="item">
                        <li onClick={this.clickOnTeam.bind(this)}>{this.props.player.team}</li>
                    </ul>
                </div>);

            let avatar = 'defaultavatar.png';
            if(this.props.player.profilePic)
                avatar = this.props.player.profilePic;

            return(
                <div className="playerDetails">
                    <div className="header">
                        <img src={avatar} alt="Player Profile"/>
                        <h1>{this.props.player.name}</h1>
                        <h5>{this.props.player.nationality}</h5>
                    </div>
                    <div className="info">
                        {position}
                        {roster}
                        {weigth}
                        {height}
                    </div>
                </div>
            );
        }
    }
};

export default connect(null,
    {
        changeSelectedTeam: changeSelectedTeam
    }
)(PlayerDetails);