import React from 'react'
import './Burger.scss'

const Burger = ({ setMobileNavOpen }) => {

    const openNav = () => setMobileNavOpen(true)

    return (
        <div className='burger' onClick={openNav}>
            <div className='burger_line'></div>
            <div className='burger_line burger_line_middle'></div>
            <div className='burger_line'></div>
        </div>
    )
}

export default Burger
