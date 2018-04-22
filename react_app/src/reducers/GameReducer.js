import { ADD_GAMES } from '../actions/GameActions';
import { ADD_ODDS_TO_GAME } from '../actions/GameActions';

export default function gameReducer(state = [], { type, payload }) 
{
    switch (type)
    {
        case ADD_GAMES:
        {
            return [...state, ...payload];
        }
        case ADD_ODDS_TO_GAME:
        {
            return state.map((item, index) => {
                if(index !== payload.index) 
                {
                    return item;
                }

                return {
                    ...item,
                    ...payload.odds
                };    
            });
        }
        default:
            return state;
    }
}
