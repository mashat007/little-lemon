import React from 'react';
import { NavLink } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    return(
        <div className='signupContainer'>
            <div className="signupContent">
                <div className="signupTitle">
                    <p>Sign Up</p>
                </div>
                <input type="text" placeholder='Jon Doe' /> <br />
                <input type="text" placeholder='jondoe@gmail.com'/> <br />
                <input type="text" placeholder='Password'/> <br />
                <input type="text" placeholder='+2348034567891'/> <br />
                <input type="date" placeholder='DOB' /> <br />
                <button>Sign up</button>
                <div className="btnLink">
                    <p>Already have an account?</p>
                    <NavLink to="/signin" className='btnLinkSign'>Sign in</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Signup;