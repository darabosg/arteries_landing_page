import React from 'react'
import './Header.scss'
import Navbar from './Navbar'
import Burger from './Burger'
import logo from '../../images/logo.svg'
import NavbarMobile from './NavbarMobile'


const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <Navbar/>
            <Burger/>
            <NavbarMobile/>
        </header>
    )
}

export default Header
