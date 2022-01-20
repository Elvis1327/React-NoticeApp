import React from 'react';

import notFoundImg from '../../assets/not-found.jpg';

export const BussinesNotice = ({notice}) => {
    return (
        <div className="_home-page-left-info-card">
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
    )
}
