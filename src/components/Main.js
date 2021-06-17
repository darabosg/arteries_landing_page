import React from 'react'
import frappe from '../images/frappe.svg'
import './Main.scss'

const Main = () => {
    return (
        <main>
            <div className='content'>
                <h1 className='title'>Our Coffee</h1>
                <p>
                    Since 1971, it always has been and will <br />
                    always be about quality. We’re passionate <br />
                    about ethically sourcing only the finest <br />
                    Arabica coffee beans and roasting them <br />
                    with great care. Our passion for coffee is <br />
                    rivaled only by our love of sharing it.
                </p>
                <button>Learn More</button>
            </div>
            <img className="frappe" src={frappe} alt='frappe' />
        </main>
    )
}

export default Main
