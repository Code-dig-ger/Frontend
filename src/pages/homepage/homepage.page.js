import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./homepage.styles.css";
import AOS from 'aos'


import { NavLink } from "react-router-dom";

import image from './images/image2.jpg'

const Homepage = () => {
  AOS.init();
  const links = [
    
     { url: "/practice", value: "practice" },
     {url : "/upsolve",value: "upsolve"},
     {url:"/logreg",value:"Login/Register"},
     { url: "/profile", value: "profile" },
     
     
  ];
   
  return (
    
    <>
    {/* navbar*/}
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

    {/* main content*/}
    <Container className="maincon">
   
      <Row>
        <Col className="first heading1" lg={12} md={12} sm={12}>
        <img src={image} className="floating"></img>
         <h5 className="text-black heading2">Dig Deeper Into Coding and improve your skills.</h5><br></br><br></br><h5 className="text-black heading2">Let's start </h5>
         <br></br>
         <br></br>
          </Col>
          </Row>

        
       {/*Features Section*/} 
    <Row className="features">
          <Col className="second" data-aos="slide-left" lg={4} md={6} sm={12}><h3>Feature 1<iframe width="350" height="300">Feature 1</iframe></h3></Col>
         
          
          <Col className="third" data-aos="slide-up" lg={4} md={6} sm={12}><h3 className="text-white">Feature 2 <iframe width="350" height="300"></iframe></h3></Col>
         
         
          <Col className="second" data-aos="slide-right" lg={4} md={6} sm={12}><h3>Feature 3<iframe width="350" height="300"></iframe></h3></Col>
          </Row>
          <br/>
          <br/>
          
          
          {/*videos section*/}
         
          <h4 style={{
            textAlign:"center"
          }}>Resources</h4>
          <Row className="vids">
            <Col className="video" lg={4} md={6} sm={12}  data-aos="slide-up"><iframe width="350" height="300" className="vidframe"
src="https://www.youtube.com/embed/VbMtwluH980">
</iframe></Col>
            <Col className="video" lg={4} md={6} sm={12} data-aos="slide-up"><iframe width="350" height="300"className="vidframe"
src="https://www.youtube.com/embed/ExNBNpCXwAo">
</iframe></Col>
            <Col className="video" lg={4} md={6} sm={12} data-aos="slide-up"><iframe width="350" height="300"className="vidframe"
src="https://www.youtube.com/embed/qHBhRoDkIm4">
</iframe></Col>
          </Row>
      
      {/*Footer*/}
      <Row data-aos="slide-up" className="fixed-bottom  footer">

      
      <footer>
  <p className="text-warning">Copyright@Codedigger | Help/Issue :
  <a className="text-warning" href="mailto:hege@example.com">codedigger@example.com</a></p>
</footer></Row>
     
       </Container> 
    
    </>
  );
};

export default Homepage;
