import { combineReducers } from 'redux';
import gameReducer from './GameReducer';
import interfaceReducer from './InterfaceReducer';

export default combineReducers(
{
    games: gameReducer,
    ui: interfaceReducer
});