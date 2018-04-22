export const ADD_GAMES = "games:add_games";
export const ADD_ODDS_TO_GAME = "games:add_odds_to_game";

export function addGames(games)
{
    return {
        type: ADD_GAMES,
        payload: games
    }
}

export function addOddsToGame(odds, index)
{
    return {
        type: ADD_ODDS_TO_GAME,
        payload: 
        {
            odds: odds,
            index: index    
        }
    }
}