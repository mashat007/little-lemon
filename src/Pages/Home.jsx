import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';

const Home = () => {
    return(
        <div className='homeContainer'>
            <h1>After a workout, I deserve a <br /> lunch out!</h1>
            {/* <button className='btn-click'>Start here </button> */}
            <NavLink to='/signup' className='btn-click'>Start</NavLink>
            
        </div>
    );
}

export default Home;