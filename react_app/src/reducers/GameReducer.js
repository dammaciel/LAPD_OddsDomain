import { ADD_GAMES } from '../actions/GameActions'

export default function gameReducer(state = [], { type, payload }) 
{
    switch (type)
    {
        case ADD_GAMES:
        {
            return [...state, ...payload];
        }
        default:
            return state;
    }
}
