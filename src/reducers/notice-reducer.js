import { TYPES } from '../types/TYPES';


const initialState = {
    teslaNotices: [],
    appleNotices: [],
    techCrunch: [],
    bussinesNotice: [],
    swallNotices: [],
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
            };
        case TYPES.bussinesNotice:
            return {
                ...state,
                bussinesNotice: action.payload
            };
        case TYPES.wallStreenNotice:
            return {
                ...state,
                swallNotices: action.payload
            }
        default:
            return state;
    }
}







