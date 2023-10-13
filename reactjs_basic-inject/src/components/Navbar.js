import React from 'react'
import './nav.css'
export const Navbar = ({ setShow }) => {

    return (
        <div className='container'>
            <h3>Logo</h3>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <button><li onClick={() => setShow(true)}>Sign In</li></button>

            </ul>
        </div>
    )
}
