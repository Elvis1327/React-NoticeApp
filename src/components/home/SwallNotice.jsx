import React from 'react'

export const SwallNotice = ({notice, idx}) => {
    return (
        <div className="_home-page-right-info-card" key={idx}>
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
