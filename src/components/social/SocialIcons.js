import React from 'react'
import SocialIcon from './SocialIcon'
import facebook from '../../images/social/facebook.svg'
import instagram from '../../images/social/instagram.svg'
import twitter from '../../images/social/twitter.svg'
import './SocialIcons.scss'

const SocialIcons = () => {
    return (
        <div className='social_icons'>
            <SocialIcon platform={facebook} />
            <SocialIcon platform={instagram} />
            <SocialIcon platform={twitter} />
        </div>
    )
}

export default SocialIcons
