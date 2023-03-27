import React from 'react';
import { NavLink } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
    return(
        <div className='signinContainer'>
            <div className="signinContent">
                <div className="siginTitle">
                    <p>Login</p>
                </div>
                <input type="text" placeholder='johnDoe@gmail.com' /> <br />
                <input type="text" placeholder='******' /> <br />
                <button>Sign in</button>
                <div className="btnLink">
                    <p>Don't have an account yet?</p>
                    <NavLink to="/signup" className="signLink">Sign up</NavLink>
                </div>
            </div>
            <div className="signinImg">
                <div className="imgContent">
                    <p>Dieting is the new standard for a healthy life</p>
                    <p className='textSmall'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    );
}

export default Signin;