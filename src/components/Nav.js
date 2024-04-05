import React, { useState } from 'react';
import logo from '../images/Logo.svg'
import {Link} from 'react-router-dom';

function Nav(){
    const [menuOpen, setMenuOpen]=useState(false);

    const toggleMenu=()=>{
        setMenuOpen(!menuOpen);
    }

    return(
        <nav className={`navbar ${menuOpen ? "open": ""}`}>
            <Link to="/home" className='logo'><img src={logo} alt="logo"/></Link>

            {/*mobile navbar */}
            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            {/* nav items */}
            <ul className={`nav-links ${menuOpen ? "visible": ""}`}>
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="">ABOUT</Link></li>
                <li><Link to="/">MENU</Link></li>
                <li><Link to="/booking">RESERVATION</Link></li>
                <li><Link to="">ONLINE ORDER</Link></li>
                <li><Link to="">LOGIN</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;