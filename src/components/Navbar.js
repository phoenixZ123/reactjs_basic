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
                    <button style={{ backgroundColor: "lightgreen" }}><li onClick={() => setShow(true)}>Create Post</li></button>

                </ul>
            </div>
        </div>
    )
}
