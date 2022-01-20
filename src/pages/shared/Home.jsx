import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { bussinesNoticeAction, swallStreetNoticeAction } from '../../actions/notices-action';
import { BussinesNotice, SwallNotice } from '../../components/home/index';

export const Home = () => {
    const dispatch = useDispatch();
    const { bussinesNotice, swallNotices } = useSelector(state => state.noticeData);

    useEffect(() => {
        dispatch(bussinesNoticeAction());
        dispatch(swallStreetNoticeAction());
    },[dispatch]);

    const getImportantNotice = (res = []) => {
        const data = res.slice(0,9);
        return data;
    }
    const resp = getImportantNotice(swallNotices);

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
                            <BussinesNotice notice={notice} key={idx} />
                        ))}
                    </div>
                    {/* Right information */}
                    <div className="_home-page-right-info-cards">
                        {resp.map((notice, idx) => (
                            <SwallNotice notice={notice} key={idx} />
                        ))}
                    </div>
                </section>
                
            </section>
        </>
    );
};


