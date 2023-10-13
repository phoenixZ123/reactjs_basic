import React from 'react'
import './nav.css'
export const Navbar = ({ setShow }) => {

    return (
       <div className='navbar'>
            <div className='container'>
                <h3>Logo</h3>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <button><li onClick={() => setShow(true)}>Sign In</li></button>

                </ul>
            </div>
       </div>
    )
}
