import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'

//FUCNTIONAL COMPONENT

function Footer() {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
		              <FontAwesomeIcon icon={faPhone} size="md"/> : +852 1234 5678<br />
		              <FontAwesomeIcon icon={faPhone} size="md"/> : +852 8765 4321<br />
		              <FontAwesomeIcon icon={faEnvelope} size="md"/> : <a href="mailto:confusion@food.net">
                         confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="https:/codedigger.tech"><FontAwesomeIcon icon={["fab", "google-plus"]} size="md"/></a>
                        <a className="btn btn-social-icon btn-facebook" href="https:/codedigger.tech"><FontAwesomeIcon icon={['fab', 'facebook']} size="md"/></a>
                        <a className="btn btn-social-icon btn-linkedin" href="https:/codedigger.tech"><FontAwesomeIcon icon={['fab', 'linkedin']} size="md"/></a>
                        <a className="btn btn-social-icon btn-twitter" href="https:/codedigger.tech"><FontAwesomeIcon icon={['fab', 'twitter']} size="md"/></a>
                        <a className="btn btn-social-icon btn-google" href="https:/codedigger.tech"><FontAwesomeIcon icon={['fab', 'youtube']} size="lg"/></a>
                        <a className="btn btn-social-icon" href="https:/codedigger.tech"><FontAwesomeIcon icon={faEnvelope} size="md"/></a>
                    </div>
                </div>
            </div>
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
