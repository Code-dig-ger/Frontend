import React from 'react';
import './errorPage.css';
import FooterSmall from '../../components/Footer/FooterSmall';
import Header from '../../components/Header/Navbar';
import {Button} from 'react-bootstrap'

function ErrorPage() {
    return (
        <>
            <Header/>
            <div className="ppp">
            <div className="errorDiv" title="404">
                404
            </div>
            
            </div>
            <div className="afterppp">
                <div>Looks like this page doesn't exist</div>
                <Button href='/home' className="homeBtn" style={{padding:'0px 4px',fontSize:'20px',marginTop:'10px'}}>Home</Button>
            </div>
            <FooterSmall/>
        </>
    )
}

export default ErrorPage
