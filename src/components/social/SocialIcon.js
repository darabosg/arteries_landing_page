import React from 'react'
import './SocialIcon.scss'

const SocialIcon = ({ platform }) => {
    return (
        <div className='social_circle'>
            <img className='social_icon' src={platform} alt={platform} />
        </div>
    )
}

export default SocialIcon
