import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { LoadingNotice } from '../shared/index';
import { AllAppleNotices } from '../../components/appleNotices/index';
// Utilities
import { appleNoticesAction } from '../../actions/notices-action';
import { getNewData, returnOneImportantNotice } from '../../helpers/apple-helpers';

export const AppleNotice = () => {

    const dispatch = useDispatch();
    const { appleNotices, loading } = useSelector(state => state.noticeData);

    useEffect(() => {
        dispatch(appleNoticesAction());
    },[dispatch]);

    const resp = getNewData(appleNotices);
    const data = returnOneImportantNotice(appleNotices)

    if(loading === true){
        return <LoadingNotice />
    };
    return (
        <section className="_main-container-apple-notice">
            <h1 style={{fontSize: '50px', fontWeight: 'bold'}}>Apple Notices</h1>
            <div className="_apple-container-left">
                <div className="_primer-apple-title-about-container">
                    <h1 className="_apple-h1-tittle">{data.title}</h1>
                    <p className="_apple-p-description-only">{data.description}</p>
                </div>
                <div className="_primer-apple-img">
                    <img
                        src={data.urlToImage} 
                        alt="notice-pic" 
                    />
                </div>
            </div>
            <section className="_all-notices-apple-container">
                {resp.map((notice, idx) => (
                    <AllAppleNotices notice={notice} key={idx} />
                ))}
            </section>
        </section>
    );
};





