import React, { useState } from 'react';
import {Link} from "react-router-dom";
import  "./Navbar.css";



const Navbar =()=>{
    const [isMobile, setIsMobile]=useState(false);
    return(
       <nav className='navbar'>
            <img className='img_l' src='./logo_a.png'></img>
        <ul className={isMobile? "nav-links-mobile":"nav-links"}
        onClick={()=>setIsMobile(false)}>
             <Link to="/" className='welcome'>
                <li className='nav_n'>WELCOME</li>
            </Link> 
            <Link to="/home" className='home'>
                <li className='nav_n'>HOME</li>
            </Link>
            <Link to="/about" className='about'>
                <li className='nav_n'>ABOUT</li>
            </Link>
           
            <Link to="/profile" className='profile'>
                <li className='nav_n'>PROFILE 
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                </li>
            </Link>
        </ul>
        <button className='mobile-menu-icon'
        onClick={()=>setIsMobile(!isMobile)}>
            {isMobile ?( <i className='fas fa-times'></i>
            ):(<i className='fas fa-bars'></i>)    
        }
        </button>
        <img className='img_l' src='./logomenu.jpg'></img>

       </nav>
    );
};
export default Navbar