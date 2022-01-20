import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTestlaNoticeAction } from '../../actions/notices-action';
import { AllTestlaNotices } from '../../components/appleNotices';

export const TeslaNotice = () => {
    
    const dispatch = useDispatch();
    const { teslaNotices } = useSelector(state => state.noticeData);

    useEffect(() => {
        dispatch(getTestlaNoticeAction());
    },[dispatch]);

    const getRandomTeslaNotice = () => {
        const data = teslaNotices[Math.floor(Math.random() * teslaNotices.length)] || '';
        return data;
    };
    const randomTeslaData = getRandomTeslaNotice();

    return (
        <section className="_main-container-tesla-notice">
            <h1 className="_tesla-notice-main-h1">Tesla Notices</h1>
            <div className="_tesla-notice-container">
                <div className="_tesla-info-container">
                    <h1>{randomTeslaData.title}</h1>
                    <p>{randomTeslaData.description}</p>
                </div>
                <div className="_tesla-img-container">
                    <img src={randomTeslaData.urlToImage} alt="tesla-notice-pic" />
                </div>
            </div>

            <div className="_all-tesla-notice-container">
                {teslaNotices.map((notices,idx) => (
                    <AllTestlaNotices notices={notices} key={idx} />
                ))}
            </div>
        </section>
    );
};


