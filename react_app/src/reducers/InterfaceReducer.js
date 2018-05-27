import { 
    CHANGE_SELECTED_GAME,
    CHANGE_SELECTED_TEAM,
    CHANGE_SELECTED_PLAYER } from '../actions/InterfaceActions';

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
            return {...state, selectedTeam: payload, sidePanel: 'team'}
        }
        case CHANGE_SELECTED_PLAYER:
        {
            return {...state, selectedPlayer: payload, sidePanel: 'player'}
        }
        default:
            return state;
    }
}
