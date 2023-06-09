import React from 'react'
// import styled from 'styled-components';
import { NavLink }  from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
// import ClearIcon from '@mui/icons-material/Clear';
import '../Nav/Navbar.css';

const Navbar = () => {
    const handleClick = (event) =>{
        event.preventDefault();
        var mobileValue = document.getElementById("mobileLink");
        if(mobileValue.style.display === "block"){
            mobileValue.style.display = "none";
        }else{
            mobileValue.style.display = "block";
        }
    }
    return(
        <>
            <nav className='nav'>
                <NavLink to="/" className="navLink">
                    GitFood
                </NavLink>
                <div className="hamburger">
                    <MenuIcon className='hamburger-icon' onClick={handleClick} />
                </div>
                <div className="navMenu">
                    <NavLink to="/" className="navLink">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="navLink">
                        About
                    </NavLink>
                    <NavLink to="/contact" className="navLink">
                        Contact Us
                    </NavLink>
                    <NavLink to="/signup" className="navLink">
                        Sign up
                    </NavLink>
                </div>
                <div className="signin">
                    <NavLink to="/signin" className="navLink">
                        Sign-in
                    </NavLink>
                </div>
            </nav>
            <div id="mobileLink">
            <nav className='nav'>
                <div className="navMenu">
                    <NavLink to="/about" className="navLink">
                        About
                    </NavLink>
                    <NavLink to="/contact" className="navLink">
                        Contact Us
                    </NavLink>
                    <NavLink to="/signup" className="navLink">
                        Sign up
                    </NavLink>
                    <NavLink to="/signin" className="navLink">
                        Sign in
                    </NavLink>
                </div>
                
            </nav>

            </div>
          
        </>
    );
} 

export default Navbar;