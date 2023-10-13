import React, { children } from 'react'
import './modal.css'
export const Model = ({ children }) => {
    return (
        <>
            <div className='modal-backdrop'>
                <div className='modal'>
                    {children}
                </div>
            </div></>
    )
}
