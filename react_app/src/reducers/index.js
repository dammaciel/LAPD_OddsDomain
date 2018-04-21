import { combineReducers } from 'redux';
import gameReducer from './GameReducer';

export default combineReducers(
{
    games: gameReducer
});