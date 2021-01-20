import { combineReducers } from 'redux';
import mapData from './mapDataReducer';

const rootReducer = combineReducers({
    mapData,
});

export default rootReducer;