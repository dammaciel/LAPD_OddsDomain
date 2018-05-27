import React, { Component } from 'react';
import GameDetails from './GameDetails';
import TeamDetails from './TeamDetails';
import PlayerDetails from './PlayerDetails';
import { connect } from 'react-redux';
import { changeSidePanel } from '../actions/InterfaceActions';

class SidePanel extends Component
{
    backPressed()
    {
        if(this.props.ui.sidePanel === 'player')
            this.props.changeSidePanel('team');
        else if(this.props.ui.sidePanel === 'team')
            this.props.changeSidePanel('game');
    }

    render()
    {
        switch (this.props.ui.sidePanel) {
            case 'game':
                return (
                    <div className="sidePanel" >
                        <GameDetails game={this.props.games[this.props.ui.selectedGame]}></GameDetails>
                    </div>
                );
                case 'team':
                return (
                    <div className="sidePanel" >
                        <TeamDetails team={this.props.teams[this.props.ui.selectedTeam]}></TeamDetails>
                        <img alt="back" src="back.png" className="back" onClick={this.backPressed.bind(this)}/>
                    </div>
                );
                case 'player':
                return (
                    <div className="sidePanel" >
                        <PlayerDetails player={this.props.teams[this.props.ui.selectedTeam].roster[this.props.ui.selectedPlayer]}></PlayerDetails>
                        <img alt="back" src="back.png" className="back" onClick={this.backPressed.bind(this)}/>
                    </div>
            );
            default:
                return (
                    <div className="sidePanel"></div>
                );
        }
        
    }
}

export default connect(null,
    {
        changeSidePanel: changeSidePanel
    }
)(SidePanel);
