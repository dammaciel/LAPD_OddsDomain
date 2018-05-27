import { 
    CHANGE_SELECTED_GAME,
    CHANGE_SELECTED_TEAM,
    CHANGE_SELECTED_PLAYER,
    CHANGE_SIDE_PANEL } from '../actions/InterfaceActions';

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
        case CHANGE_SELECTED_TEAM:
        {
            if(payload === null)
                return {...state, sidePanel: 'team'}
            else
                return {...state, selectedTeam: payload, sidePanel: 'team'}
        }
        case CHANGE_SELECTED_PLAYER:
        {
            return {...state, selectedPlayer: payload, sidePanel: 'player'}
        }
        case CHANGE_SIDE_PANEL:
        {
            return {...state, sidePanel: payload}
        }
        default:
            return state;
    }
}
