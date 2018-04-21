export const CHANGE_SELECTED_GAME = "ui:change_selected_game";

export function changeSelectedGame(index)
{
    return {
        type: CHANGE_SELECTED_GAME,
        payload: index
    }
}