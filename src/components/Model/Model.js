import React, { children } from 'react'
import './modal.css';
import ReactDom from 'react-dom';

export const Model = ({ children, active }) => {
    const activeColor = active ? "available" : "outofstock";
    return (
        ReactDom.createPortal(

            <div className='modal-component'>
                <div className='modal-backdrop' >
                    <div className={`modal ${activeColor}`} >
                        {children}
                    </div>
                </div>
            </div >, document.getElementById('modal')
        )

    )
}
