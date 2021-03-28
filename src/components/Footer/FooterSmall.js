import React from 'react';
import './footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGooglePlus, faGooglePlusSquare,faLinkedin,faLinkedinIn, faInstagram, faInstagramSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function FooterSmall() {
    return(
    <div className="footer m-0">
        <div className="container-fluid p-4 m-0">
            <div className="row justify-content-center"> 
                            
                <div className="col-6 col-sm-6">
                <p style={{
                    fontSize: '18px',
                    padding: '0px',
                    margin: '0px'
                }}>© Copyright Codedigger 2021</p>
                </div>
                

                <div className="col-6 col-sm-6 m-0">
                    
                    
                    <div className="float-right m-0">
                   
                        <a className="social_media" href="http://codedigger.tech/"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
                        <a className="social_media" href="http://codedigger.tech"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                        <a className="social_media" href="http://codedigger.tech"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                        <a className="social_media" href="http://codedigger.tech"><FontAwesomeIcon icon={faYoutube} size="2x"/></a>
                        
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
    )
}

export default FooterSmall;
