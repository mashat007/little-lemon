import React from 'react'
// import styled from 'styled-components';
import {Link, NavLink}  from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import '../Nav/Navbar.css';

const Navbar = () => {
    const handleClick = () =>{
        alert("Clicked")
    }
    return(
        <>
            <nav className='nav'>
                <NavLink to="/" className="navLink">
                    Logo
                </NavLink>
                <div className="hamburger">
                    <MenuIcon className='hamburger-icon' onClick={handleClick} />
                    {/* <ClearIcon className='hamburger-icon' /> */}
                </div>
                <div className="navMenu">
                    <NavLink to="/about" className="navLink"  activeStyle >
                        About
                    </NavLink>
                    <NavLink to="/services" className="navLink" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/contact" className="navLink" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/sign-up" className="navLink" activeStyle>
                        Sign up
                    </NavLink>
                </div>
                <div className="signin">
                    <NavLink to="/sign-in" className="navLink" activeStyle>
                        Sign-in
                    </NavLink>
                </div>
            </nav>
          
        </>
    );
} 

export default Navbar;