import React from 'react';


import './MenuBar.css';

const MenuBar = ({ menuItems = {} }) => {

    const { Linkedin, GitHub} = menuItems

    return (
        <>
            <nav>
                <ul>        
                    <li className="item-menu"><a href={Linkedin} target="blanck"><input type="button" value="Linkedin" /></a></li>
                    <li className="item-menu"><a href={GitHub} target="blanck"><input type="button" value="GitHub" /></a></li>         
                    
                </ul>
            </nav> 
        </>
    )
};


export default MenuBar;
