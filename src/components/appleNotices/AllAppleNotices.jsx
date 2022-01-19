import React from 'react'

export const AllAppleNotices = ({notice, idx}) => {
    return (
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
    )
}
