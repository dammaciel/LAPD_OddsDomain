import { CHANGE_SELECTED_GAME } from '../actions/InterfaceActions';

const defaultState = {
    selectedGame: null
};

export default function gameReducer(state = defaultState, { type, payload }) 
{
    switch (type)
    {
        case CHANGE_SELECTED_GAME:
        {
            return { selectedGame: payload }
        }
        default:
            return state;
    }
}
