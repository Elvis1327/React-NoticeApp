import { TYPES } from '../types/TYPES';

const initialState = {
    teslaNotices: [],
    appleNotices: [],
    bussinesNotice: [],
    swallNotices: [],
    loading: true,
    teslaLoading: true
};

export const noticeReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.appleNotice:
            return {
                ...state,
                appleNotices: action.payload,
                loading: false
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
            };
        case TYPES.teslaNotice:
            return {
                ...state,
                teslaNotices: action.payload
            }
        default:
            return state;
    }
}







