export const ADD_GAMES = "games:add_games";

export function addGames(games)
{
    return {
        type: ADD_GAMES,
        payload: games
    }
}