import { TYPES } from '../types/TYPES';


const initialState = {
    teslaNotices: [],
    appleNotices: [],
    techCrunch: [],
    loading: true
};

export const noticeReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.appleNotice:
            return {
                ...state,
                appleNotices: action.payload,
                loading: false
            };
        case TYPES.techCrunch:
            return {
                ...state,
                techCrunch: action.payload
            }
        default:
            return state;
    }
}







