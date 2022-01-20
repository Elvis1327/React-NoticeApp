import React from 'react';

export const AllTestlaNotices = ({notices}) => {
    return (
        <div className="_all-tesla-notices-card">
            <div className="_tesla-card-img">
                <img src={notices.urlToImage} alt="tesla-pic" />
            </div>
            <div className="_tesla-card-info">
                <h1>{notices.title}</h1>
                <p>
                    {notices.description}
                </p>
            </div>
        </div>
    )
}

