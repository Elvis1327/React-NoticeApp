import React from 'react'

export const SwallNotice = ({notice}) => {
    return (
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
    )
}
