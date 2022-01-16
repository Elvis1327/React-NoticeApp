import { TYPES } from '../types/TYPES';
import { appleNoticesFetch, techCrunchFetch, } from '../helpers/apple-fetch';
import { homeDataFetch, swallStreetFetch } from '../helpers/home-fetch';

// Apple notices
const appleNotices = (notices) => {
    return {
        type: TYPES.appleNotice,
        payload: notices
    };
};
export const appleNoticesAction = () => {
    return async (dispatch) => {
        const resp = await appleNoticesFetch();
        dispatch(appleNotices(resp));
    }
};
//  Notices Crunch
const techCrunchNotice = (data) => {
    return {
        type: TYPES.techCrunch,
        payload: data
    }
};
export const techCrunchAction = () => {
    return async (dispatch) => {
        const resp = await techCrunchFetch();
        dispatch(techCrunchNotice(resp));
    }
}
// Bussines notice
const bussinesNotice = (notice) => {
    return {
        type: TYPES.bussinesNotice,
        payload: notice
    }
};
export const bussinesNoticeAction = () => {
    return async (  dispatch ) => {
        const resp = await homeDataFetch();
        dispatch(bussinesNotice(resp));
    };
};
// Swall street notice
const swallStreetNotice = (notice) => {
    return {
        type: TYPES.wallStreenNotice,
        payload: notice
    };
};
export const swallStreetNoticeAction = () => {
    return async (dispatch ) => {
        const resp = await swallStreetFetch();
        dispatch(swallStreetNotice(resp));
    }
}



