import React, { Component } from 'react';
import GameDetails from './GameDetails';
import TeamDetails from './TeamDetails';
import PlayerDetails from './PlayerDetails';

class SidePanel extends Component
{
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
                        <TeamDetails team={this.props.ui.selectedTeam}></TeamDetails>
                    </div>
                );
            case 'player':
            return (
                <div className="sidePanel" >
                    <PlayerDetails player={this.props.ui.selectedPlayer}></PlayerDetails>
                </div>
            );
            default:
                return (
                    <div className="sidePanel"></div>
                );
        }
        
    }
}

export default SidePanel;
