import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { NavLink } from "react-router-dom";

function header() {
    const links = [
    
        { url: "/practice", value: "practice" },
        {url : "/upsolve",value: "upsolve"},
        {url:"/logreg",value:"Login/Register"},
        { url: "/profile", value: "profile" },
        { url: "/ladders", value: "ladders" }
        
     ];
    return (
        <div>
            <Row className="fixed-top py-3 px-md-3 header">
    
                <Col className="text-nowrap overflow-auto pb-2">
                
                {links.map((link, index) => (
                    <NavLink
                    key={index}
                    exact
                    to={link.url}

                    className={`${link.value==="CODEDIGGER"?"heading1": "my-2 mx-4 text-white d-inline-block navbar-link" }`}
                    >
                    {link.value.toUpperCase()}
                    </NavLink>
                ))}
                
                </Col>
            </Row>
        </div>
    )
}

export default header
