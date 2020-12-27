import React, {useEffect} from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./homepage.styles.css";
import AOS from 'aos';
import Navbar from '../../components/headerComponent/Navbar';
import Footer from '../../components/footerComponent/footer';
import image from './images/image2.jpg';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Homepage = () => {
  AOS.init();

  return ( 
    <>
    <Navbar />
   
    {/* main content*/}
    <Container className="maincon" >
   
      <Row className="bannerContainer">
        <Col className="first heading1" lg={12} md={12} sm={12}>   
        <div className="headinBanner" 
          style={{
            display:'flex',
            justifyContent:'space-between',
            marginTop:'100px'
          }}
        > 
          <div className="headingText"><h5 className="text-white heading2">CODEDIGGER</h5><br></br><br></br><h5 className="text-white heading2">Let's start </h5></div>     
          <div className="headingImage"><img src={image} className="floating"></img></div>
        </div>
        </Col>
        </Row>

        
       {/*Features Section*/} 
    <Row style={{backgroundColor:"white"}} className="features">
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

        <Row style={{backgroundColor:"white"}}>
          <Col className="first heading1" lg={12} md={12} sm={12}>
            <div class="aboutUsHeading">ABOUT US</div>  
            <div className="aboutUsContent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</div> 
          <section id="counter" class="counter">
            <div class="main_counter_area">
                <div class="overlay p-y-3">
                    <div class="container">
                        <div class="row">
                            <div class="main_counter_content text-center white-text wow fadeInUp">
                                <div class="col-md-4">
                                    <div class="single_counter p-y-2 m-t-1"> <i class="fa fa-briefcase m-b-1"></i>
                                        <h2 class="statistic-counter">
                                          <CountUp start={0} end={100} duration={3} redraw={true}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <h2 ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                          </h2> <span></span>
                                        <p>Success Stories of Students</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="single_counter p-y-2 m-t-1"> <i class="fa fa-check m-b-1"></i>
                                        <h2 class="statistic-counter">
                                        <CountUp start={0} end={1000} duration={3}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <h2 ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                        </h2>
                                        <p>Problems Solved</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="single_counter p-y-2 m-t-1"> <i class="fa fa-coffee m-b-1"></i>
                                        <h2 class="statistic-counter">
                                        <CountUp start={0} end={500} duration={3} redraw={true}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <h2 ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                        </h2>
                                        <p>Registered Users</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          </Col>
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
