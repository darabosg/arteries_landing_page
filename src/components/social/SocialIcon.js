import React from 'react'
import './SocialIcon.scss'

const SocialIcon = ({ platform }) => {
    return (
        <div className='social_circle'>
            <a href='_blank'>
                <img src={platform} alt={platform} />
            </a>
        </div>
    )
}

export default SocialIcon
