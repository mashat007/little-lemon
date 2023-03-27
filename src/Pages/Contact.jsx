import React from 'react';
import './Contact.css';

const Contact = () => {
    return(
        <div className='contactContainer'>
            <div className="contactWrapper">
                <div className="contactContent">
                    <div className="contactLinks">
                        <div className="contactAddress">
                            <div className="contactLogo">Logo</div>
                            <h4>Address</h4>
                            <p>The Gold Avenue 123/3</p>
                        </div>
                        <div className="contactPhone">
                            <div className="contactLogo">Logo</div>
                            <h4>Phone</h4>
                            <p>+234801111111</p>
                        </div>
                        <div className="contactEmail">
                            <div className="contactLogo">Logo</div>
                            <h4>Email</h4>
                            <p>info@littlelemon.com</p>
                        </div>
                    </div>
                    <div className="contactMessage">
                        <div className="messageTitle">
                            <p>Leave Message</p>
                        </div>
                        <input type="text" placeholder='Enter your name' /> <br />
                        <input type="text" placeholder='Enter a valid email address' /> <br />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Enter your message'></textarea> <br />
                        <button>Submit</button>
                    </div>
                </div>                
            </div>            
        </div>
    );
}

export default Contact;