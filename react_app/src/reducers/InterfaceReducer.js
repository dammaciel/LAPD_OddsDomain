import { 
    CHANGE_SELECTED_GAME, 
    CHANGE_SIDE_PANEL, 
    CHANGE_SELECTED_TEAM_INFO,
    CHANGE_SELECTED_PLAYER_INFO } from '../actions/InterfaceActions';

const defaultState = {
    selectedGame: null,
    selectedTeam: null,
    selectedPlayer: null,
    sidePanel: null
};

export default function interfaceReducer(state = defaultState, { type, payload }) 
{
    switch (type)
    {
        case CHANGE_SELECTED_GAME:
        {
            return {...state, selectedGame: payload, sidePanel: 'game' }
        }
        case CHANGE_SIDE_PANEL:
        {
            return {...state, sidePanel: payload }
        }
        case CHANGE_SELECTED_TEAM_INFO:
        {
            return {...state, selectedTeam: payload}
        }
        case CHANGE_SELECTED_PLAYER_INFO:
        {
            return {...state, selectedPlayer: payload}
        }
        default:
            return state;
    }
}
