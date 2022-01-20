import React from 'react';

import imgNotFound from '../../assets/not-found.jpg';

export const AllAppleNotices = ({notice}) => {
    return (
        <div className="_apple-notices-card">
            <div className="_apple-img-notice-card">
                <img src={notice.urlToImage ? notice.urlToImage : imgNotFound} alt="notice-pic" />
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
    )
}
