import React from 'react'
import './Burger.scss'

const Burger = ({ setMobileNavOpen }) => {

    const openNav = () => setMobileNavOpen(true)

    return (
        <div className='burger' onclick={openNav}>
            <div className='burger_line'></div>
            <div className='burger_line_middle'></div>
            <div className='burger_line'></div>
        </div>
    )
}

export default Burger
