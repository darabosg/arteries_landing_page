import React, { useState } from 'react'
import './Header.scss'
import Navbar from './Navbar'
import Burger from './Burger'
import logo from '../../images/logo.svg'
import NavbarMobile from './NavbarMobile'

const Header = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    return (
        <header>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <Navbar />
            <Burger setMobileNavOpen={setMobileNavOpen} />
            {mobileNavOpen && (
                <NavbarMobile setMobileNavOpen={setMobileNavOpen} />
            )}
        </header>
    )
}

export default Header
