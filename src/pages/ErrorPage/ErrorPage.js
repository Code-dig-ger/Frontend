import React from 'react';
import './errorPage.css';
import FooterSmall from '../../components/Footer/FooterSmall';
import Header from '../../components/Header/Navbar';
import {Button} from 'react-bootstrap'
import { Add16 } from '@carbon/icons-react';

function ErrorPage() {
    return (
        <>
            <Header/>
            {/* <button>
                <Add16 aria-label="Add" className="my-custom-class" />
            </button> */}
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
