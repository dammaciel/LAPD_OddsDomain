export const ADD_TEAMS = "teams:add_teams";
export const ADD_PLAYERS_TO_TEAM = "games:add_odds_to_game";

export function addTeams(teams)
{
    return {
        type: ADD_TEAMS,
        payload: teams
    }
}

export function addPlayersToTeam(players, index)
{
    return {
        type: ADD_PLAYERS_TO_TEAM,
        payload: { players, index }
    }
}