import React from 'react'
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className='desktop_nav'>
            <ul>
                <li className='selected'>
                    <a href=''>Coffee</a>
                </li>
                <li>
                    <a href=''>Tea</a>
                </li>
                <li>
                    <a href=''>Menu</a>
                </li>
                <li>
                    <a href=''>About us</a>
                </li>
                <li>
                    <a href=''>Card</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
