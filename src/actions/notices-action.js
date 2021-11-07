import { TYPES } from '../types/TYPES';
import { appleNoticesFetch, techCrunchFetch } from '../helpers/apple-fetch';

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


