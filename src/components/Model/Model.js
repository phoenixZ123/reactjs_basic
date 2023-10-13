import React, { children } from 'react'
import './modal.css';
import ReactDom from 'react-dom';
export const Model = ({ children }) => {
    return (     
            ReactDom.createPortal(
            <div className='modal-backdrop'>
                <div className='modal'>
                    {children}
                </div>
            </div>,document.getElementById('modal')
            )
        
    )
}
