import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import '../../index.css';
import {FaUserAlt, FaSignOutAlt} from 'react-icons/fa' ;
import logo from '../../images/logo.png'

function NavBar(){

    const location = useLocation();
    const [showNav, setShowNav] = useState(true);
  
    const handleLinkClick = () => {
      setShowNav(false);
    };
  
    const handleLogoClick = () => {
      setShowNav(true);
    };

    return(
        
            <nav id='navbar'className={`navbar ${showNav ? "" : "hidden"}`}>
                <div className='logo'>
                    <img src={logo} alt='avatar' className='md:cursor-ponter h-9'/>
                </div>
                <ul className='nav-links'>
                    <Link to='/Profile' className='profile' onClick={handleLinkClick}>
                        <li className={`user ${location.pathname === "/Profile" ? "hidden" : ""}`}><FaUserAlt className='nav-icon'/>Profile</li>
                    </Link>
                    <Link to='/' className='logout'>
                        <li className='log'><FaSignOutAlt className='nav-icon'/>Logout</li>
                    </Link>
                </ul>      
                
            </nav>
      
    )
}
export default NavBar