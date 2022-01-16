import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { appleNoticesAction,techCrunchAction } from '../../actions/notices-action';
import LoadingNotice from '../shared/LoadingNotice';

const AppleNotice = () => {

    const dispatch = useDispatch();
    const { appleNotices, loading, techCrunch } = useSelector(state => state.noticeData);

    useEffect(() => {
        dispatch(appleNoticesAction());
        dispatch(techCrunchAction());
    },[dispatch]);

    const getNewData = (data = []) => {
        const resp = data.slice(0,6);
        return resp;
    };
    const resp = getNewData(appleNotices);

    const returnOneImportantNotice = (n = []) => {
        const resp = n[Math.floor(Math.random() * n.length )] || '';
        return resp;
    };
    const data = returnOneImportantNotice(appleNotices)

    if(loading === true){
        return <LoadingNotice />
    };
    return (
        <section className="_main-container-apple-notice">
            <section className="_all-apple-notices-info">
                <div className="_apple-container-left">
                    <div className="_primer-apple-title-about-container">
                        <div className="_primer-apple-title-about">
                            <h1 className="_apple-h1-tittle">{data.title}</h1>
                            <p className="_apple-p-description-only">{data.description}</p>
                        </div>
                    </div>
                    <div className="_primer-apple-img">
                        <img 
                            className="_primer-apple-img" 
                            src={data.urlToImage} 
                            alt="notice-pic" 
                        />
                    </div>
                </div>
                <div className="_cards-about-tech-crunch">
                    {techCrunch.map((res, idx) => (
                    <div className="_tech-crunch-card" key={idx}>
                        <div className="_tech-crunch-image">
                            <img src={res.urlToImage} alt="tech-pic" />
                        </div>
                        <div className="_tech-crunch-info">
                            <h1 className="_tech-crunch-info-h1">{res.title}</h1>
                            <p className="_tech-crunch-info-p">
                                {res.description}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
            
            <section className="_all-notices-apple-container">
                {resp.map((notice, idx) => (
                    <div key={idx} className="_apple-notices-card">
                        <div className="_apple-img-notice-card">
                            <img src={notice.urlToImage} alt="notice-pic" />
                        </div>
                        <div className="_apple-info-notice-card-container" style={{padding: '20px'}}>
                            <div className="_apple-info-notice-card">
                                <h1 className="_apple-notice-card-h1">
                                    {notice.title}
                                </h1>
                                <p className="_apple-notice-card-p">
                                    {notice.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    );
};
export default AppleNotice;




