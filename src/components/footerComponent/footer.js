import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faGooglePlus, faGooglePlusSquare, faInstagram, faInstagramSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import image1 from './images/codeforces.jpg';

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
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-6 contactUs">
                    <h5>Contact Us</h5>
                    <br/>
                    <div>
                        <FontAwesomeIcon icon={faPhone} size="md"/> : +852 1234 5678<br />
		                <FontAwesomeIcon icon={faPhone} size="md"/> : +852 8765 4321<br />
		                <FontAwesomeIcon icon={faEnvelope} size="md"/> : <a href="mailto:confusion@food.net">
                         confusion@food.net</a>
                    </div>
                    <br/>
                    <div >
                        <a className="btn btn-social-icon btn-google" href="http://codedigger.tech"><FontAwesomeIcon icon={faGooglePlus} size="2x"/></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://codedigger.tech/"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://codedigger.tech"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://codedigger.tech"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
                        <a className="btn btn-social-icon btn-google" href="http://codedigger.tech"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                        <a className="btn btn-social-icon" href="http://codedigger.tech"><FontAwesomeIcon icon={faYoutube} size="2x"/></a>
                    </div>
                </div>
                <div className="col-6 col-sm-2">
                    <h5>Platforms</h5>
                    <br></br>
                    <div>
                        <ul >
                            <li><div className="codeforces"></div>CODEFORCES</li>
                            <li><div className="codeforces"></div>CODECHEF</li>
                            <li><div className="codeforces"></div>SPOJ</li>
                            <li><div className="codeforces"></div>TOPCODER</li>
                        </ul>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright Codedigger</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;
