import React from 'react'
import './SocialIcon.scss'

const SocialIcon = ({ platform }) => {
    return (
        <div className='social_circle'>
            <a href=''>
                <img src={platform} alt={platform} />
            </a>
        </div>
    )
}

export default SocialIcon
