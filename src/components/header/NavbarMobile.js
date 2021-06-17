import React from 'react'
import './NavbarMobile.scss'

const NavbarMobile = () => {
    return (
        <div className='mask'>
            <div className='nav_mobile'>
                <div className='close'>
                    <div className='close_line1'></div>
                    <div className='close_line2'></div>
                </div>
                <nav>
                    <ul>
                        <li className='mobile_selected'>Coffe</li>
                        <li>Tea</li>
                        <li>Menu</li>
                        <li>About us</li>
                        <li>Card</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavbarMobile
