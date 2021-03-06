import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
               className="nav__logo"
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" 
               alt="netflix Logo" 
            />
            <img 
               className="nav__avatar"
               src="https://icon-library.com/images/menu-icon-mobile/menu-icon-mobile-7.jpg" 
               alt="netflix Logo" 
            />
        </div>
    )
}

export default Nav
