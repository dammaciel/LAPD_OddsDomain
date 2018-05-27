import { 
    ADD_PLAYERS_TO_TEAM,
    ADD_TEAMS } from '../actions/TeamActions';

export default function teamReducer(state = [], { type, payload }) 
{
    switch (type)
    {
        case ADD_PLAYERS_TO_TEAM:
        {
            return state.map((item, index) =>
            {
                if(index !== payload.index)
                    return item;

                return {
                    ...item,
                    players: payload.players
                };
            });
        }
        case ADD_TEAMS:
        {
            return [...state, ...payload]
        }
        default:
            return state;
    }
}
