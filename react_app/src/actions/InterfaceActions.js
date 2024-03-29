export const CHANGE_SELECTED_GAME = "ui:change_selected_game";
export const CHANGE_SELECTED_TEAM = "ui:change_selected_team_info";
export const CHANGE_SELECTED_PLAYER = "ui:change_selected_player_info";
export const CHANGE_SIDE_PANEL = "ui:change_side_panel";

export function changeSidePanel(panel)
{
    return {
        type: CHANGE_SIDE_PANEL,
        payload: panel
    }
}

export function changeSelectedGame(index)
{
    return {
        type: CHANGE_SELECTED_GAME,
        payload: index
    }
}

export function changeSelectedTeam(team)
{
    return {
        type: CHANGE_SELECTED_TEAM,
        payload: team
    }
}

export function changeSelectedPlayer(player)
{
    return {
        type: CHANGE_SELECTED_PLAYER,
        payload: player
    }
}