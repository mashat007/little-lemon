import React from 'react';
import './About.css';

const About = () => {
    return(
        <div className='aboutContainer'>
            <div className="aboutHead"></div>
            <div className="containerWrapper">
                <div className="aboutContent">
                    <h2>About Us</h2>
                    <div className="aboutImg"></div>
                    <div className="aboutText">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro nobis nulla quo labore quidem reprehenderit nostrum sed rerum architecto! Quas, temporibus praesentium mollitia, reiciendis architecto eveniet id harum</p> <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur facilis ea velit deserunt dolores rerum placeat</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;