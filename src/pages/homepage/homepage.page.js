import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./homepage.styles.css";
import AOS from 'aos';
import Header from '../../components/header';
import Footer from '../../components/footerComponent/footer';

import image from './images/image2.jpg'

const Homepage = () => {
  AOS.init();
   
  return ( 
    <>
    <Header />

    {/* main content*/}
    <Container className="maincon" >
   
      <Row>
        <Col className="first heading1" lg={12} md={12} sm={12}>   
        <div className="headinBanner" 
          style={{
            display:'flex',
            justifyContent:'space-between',
            marginTop:'100px'
          }}
        > 
          <div className="headingText"><h5 className="text-white heading2">Dig Deeper Into Coding and improve your skills.</h5><br></br><br></br><h5 className="text-white heading2">Let's start </h5></div>     
          <div className="headingImage"><img src={image} className="floating"></img></div>
        </div>
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
      {/* <Row data-aos="slide-up" className="fixed-bottom  footer"> */}

      
      {/* <footer>
  <p className="text-warning">Copyright@Codedigger | Help/Issue :
  <a className="text-warning" href="mailto:hege@example.com">codedigger@example.com</a></p>
</footer> */}
      
     
       </Container> 
       <Footer />
    </>
  );
};

export default Homepage;
