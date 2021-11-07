import { combineReducers } from 'redux';
import { noticeReducer } from './notice-reducer';

export const rootReducer = combineReducers({
    noticeData: noticeReducer
});


