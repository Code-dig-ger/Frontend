import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faGooglePlus, faGooglePlusSquare, faInstagram, faInstagramSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

//FUCNTIONAL COMPONENT

function Footer() {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center"> 
                            
                <div className="col-6 col-sm-3">
                    <h5>Links</h5>
                    <br/>
                    <ul className="list-unstyled">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-3 contactUs">
                    <h5>Contact Us</h5>
                    <br/>
                    <div>
                        <FontAwesomeIcon icon={faPhone} size="md"/> : +852 1234 5678<br />
		                <FontAwesomeIcon icon={faPhone} size="md"/> : +852 8765 4321<br />
		                <FontAwesomeIcon icon={faEnvelope} size="md"/> : <a href="mailto:confusion@food.net">
                         confusion@food.net</a>
                    </div>
                    
                    
                </div>

                <div className="col-12 col-sm-3">
                    
                    
                    <div>
                        
                    <h5>Follow Us</h5>
                    <br/>
                        <a className="social_media" href="http://codedigger.tech/"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
                        <a className="social_media" href="http://codedigger.tech"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
                        <a className="social_media" href="http://codedigger.tech"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
                        <a className="social_media" href="http://codedigger.tech"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                        <a className="social_media" href="http://codedigger.tech"><FontAwesomeIcon icon={faYoutube} size="2x"/></a>
                        
                    </div>
                </div>
                
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright Codedigger 2021</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;
