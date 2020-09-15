import React from 'react'

import './Logo.css';

const Logo = ({ url }) => {

    return (
        <>
            <div className="logo-container">
                    <p className="loader">Loading...</p>
                {url &&
                    <img className="animate__animated animate__fadeIn animate__slow"src={ url } alt="logo" ></img>      
                }
            </div> 
        </>
    )
}

export default Logo
