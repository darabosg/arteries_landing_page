import React from 'react'
import './SocialIcon.scss'

const SocialIcon = ({ platform }) => {
    return (
        <div className='social_circle'>
            <img src={platform} alt={platform} />
        </div>
    )
}

export default SocialIcon
