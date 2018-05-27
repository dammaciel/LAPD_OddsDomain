export const CHANGE_SELECTED_GAME = "ui:change_selected_game";
export const CHANGE_SIDE_PANEL = "ui:change_side_panel";
export const ADD_SELECTED_TEAM_INFO = "ui:add_selected_team_info";
export const ADD_SELECTED_PLAYER_INFO = "ui:add_selected_player_info";

export function changeSelectedGame(index)
{
    return {
        type: CHANGE_SELECTED_GAME,
        payload: index
    }
}

export function changeSidePanel(type)
{
    return {
        type: CHANGE_SIDE_PANEL,
        payload: type
    }
}

export function addSelectedTeamInfo(team)
{
    return {
        type: ADD_SELECTED_TEAM_INFO,
        payload: team
    }
}

export function addSelectedPlayerInfo(player)
{
    return {
        type: ADD_SELECTED_PLAYER_INFO,
        payload: player
    }
}