import React from 'react'
import './NavbarMobile.scss'

const NavbarMobile = ({ setMobileNavOpen }) => {
    const closeNav = () => setMobileNavOpen(false)

    return (
        <div className='mask'>
            <div className='sidebar'>
                
                    <div className='close' onClick={closeNav}>
                        <div className='close_line close_line1'></div>
                        <div className='close_line close_line2'></div>
                    </div>
               

                <nav className='mobile_nav'>
                    <ul>
                        <li className='mobile_selected'>Coffee</li>
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
