import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './header.css'
import { NavLink } from "react-router-dom";


function HeaderList(link,index)
{
    return (
        <NavLink
        key={index}
        exact
        to={link.url}
        className={`${link.value==="CODEDIGGER"?"heading1": "my-2 mx-4 text-white d-inline-block" }`}
        >
            {link.value.toUpperCase()}
    
        </NavLink>
    )
}

function header() {
    const links = [
    
        { url: "/practicelevel", value: "practiceL" },
        { url: "/practiceTopic", value: "practiceT" },
        { url: "/laddersLevel", value: "laddersL" },
        { url: "/laddersTopic", value: "laddersT" },
        {url : "/upsolve",value: "upsolve"},
        { url: "/profile", value: "profile" },
        { url: "/", value: "CODEDIGGER"},
        {url:"/logreg",value:"Login/Register"},
        
     ];
     
    return (
        <div>
            <Row className="fixed-top py-1 px-md-3 header">
    
                <Col className="text-nowrap overflow-auto pb-2 align-centre">

                    {HeaderList(links[0], 1)}
                    {HeaderList(links[1], 1)}
                    {HeaderList(links[2], 1)}
                    {HeaderList(links[3], 1)}
                    {HeaderList(links[4], 1)}
                    {HeaderList(links[5], 1)}
                    {HeaderList(links[6], 1)}
                    {HeaderList(links[7], 1)}

                
                    {/* <NavLink
                        key={index}
                        exact
                        to={link.url}

                        className={`${link.value==="CODEDIGGER"?"heading1": "my-2 mx-4 text-white d-inline-block navbar-link" }`}
                        >
                        {link.value.toUpperCase()}
                    </NavLink>

                    <NavLink
                    key={index}
                    exact
                    to={link.url}

                    className={`${link.value==="CODEDIGGER"?"heading1": "my-2 mx-4 text-white d-inline-block navbar-link" }`}
                    >
                    {link.value.toUpperCase()}
                    </NavLink>

                    <NavLink
                    key={index}
                    exact
                    to={link.url}

                    className={`${link.value==="CODEDIGGER"?"heading1": "my-2 mx-4 text-white d-inline-block navbar-link" }`}
                    >
                    {link.value.toUpperCase()}
                    </NavLink>

                    <NavLink
                    key={index}
                    exact
                    to={link.url}

                    className={`${link.value==="CODEDIGGER"?"heading1": "my-2 mx-4 text-white d-inline-block navbar-link" }`}
                    >
                    {link.value.toUpperCase()}
                    </NavLink>

                    <NavLink
                    key={index}
                    exact
                    to={link.url}

                    className={`${link.value==="CODEDIGGER"?"heading1": "my-2 mx-4 text-white d-inline-block navbar-link" }`}
                    >
                    {link.value.toUpperCase()}
                    </NavLink> */}
                
                </Col>
            </Row>
        </div>
    )
}

export default header;
