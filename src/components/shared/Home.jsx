import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { bussinesNoticeAction, swallStreetNoticeAction } from '../../actions/notices-action';
import notFoundImg from '../../assets/not-found.jpg';

const Home = () => {
    const dispatch = useDispatch();
    const { bussinesNotice, swallNotices } = useSelector(state => state.noticeData);

    useEffect(() => {
        dispatch(bussinesNoticeAction());
        dispatch(swallStreetNoticeAction());
    },[dispatch]);

    return (
        <>
            <section className="_main-container-home-page">
                <div className="_home-page-enterate">
                    <h1 className="_home-page-h1-discover">Discover what is happnening in the world!</h1>
                </div>

                <section className="_main-container-home-page-info">
                    {/* Left information */}
                    <div className="_home-page-left-info-cards">
                        {bussinesNotice.map((notice, idx) => (
                            <div className="_home-page-left-info-card" key={idx}>
                                <img 
                                    src={notice.urlToImage || notFoundImg } 
                                    alt="notice-pic"
                                    className="_home-page-left-info-card-img"
                                />
                                <div className="_home-page-left-info-card-info">
                                    <h1>{notice.title}</h1>
                                    <p>
                                        {notice.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Right information */}
                    <div className="_home-page-right-info-cards">
                        {swallNotices.map(notice => (
                            <div className="_home-page-right-info-card">
                                <img 
                                    src={notice.urlToImage} 
                                    alt="notice-info"
                                    className="_home-page-right-info-image" 
                                />
                                <div className="_home-page-right-info-card-info">
                                    <h1>{notice.title}</h1>
                                    <p>
                                        {notice.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                
            </section>
        </>
    );
};
export default Home;

