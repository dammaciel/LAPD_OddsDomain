import { combineReducers } from 'redux';
import gameReducer from './GameReducer';
import interfaceReducer from './InterfaceReducer';
import teamReducer from './TeamReducer';

export default combineReducers(
{
    games: gameReducer,
    ui: interfaceReducer,
    teams: teamReducer
});