import React from 'react'
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className='desktop_nav'>
            <ul>
                <li className='selected'>
                    <a href='_blank'>Coffee</a>
                </li>
                <li>
                    <a href='_blank'>Tea</a>
                </li>
                <li>
                    <a href='_blank'>Menu</a>
                </li>
                <li>
                    <a href='_blank'>About us</a>
                </li>
                <li>
                    <a href='_blank'>Card</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
