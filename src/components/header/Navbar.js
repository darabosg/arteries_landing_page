import React from 'react'
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className="desktop_nav">
            <ul>
                <li className="selected">Coffee</li>
                <li>Tea</li>
                <li>Menu</li>
                <li>About us</li>
                <li>Card</li>
            </ul>
        </nav>
    )
}

export default Navbar
