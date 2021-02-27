import React, {useEffect,useState} from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./homepage.styles.css";
import AOS from 'aos';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/footer';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Typewriter from 'typewriter-effect';
import '../../../node_modules/reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

// const func = () => {
//   var testimonialItems = document.querySelectorAll(".item label");
// var timer;
// const cycleTestimonials = (index) => {
//    timer = setTimeout(function() {
//     var evt;
//     evt = new MouseEvent("click", {
//       view: window,
//       bubbles: true,
//       cancelable: true,
//       clientX: 20
//     });
//     var ele = "." + testimonialItems[index].className;
//     var ele2 = document.querySelector(ele);
//     ele2.dispatchEvent(evt);
//     index++; // Increment the index
//     if (index >= testimonialItems.length) {
//       index = 0; // Set it back to `0` when it reaches `3`
//     }
//     cycleTestimonials(index); // recursively call `cycleTestimonials()`
//     document.querySelector(".testimonials").addEventListener("click", function() {
//       clearTimeout(timer); //stop the carousel when someone clicks on the div
//     });
//   }, 2000); //adjust scroll speed in miliseconds
// }
// //run the function
// cycleTestimonials(0);
// }

// background-image: url('./images//BgImage.jpg');

const Homepage = () => {
  AOS.init();
  let err=localStorage.getItem("err");
  localStorage.removeItem("err");
  

  return ( 
    <>
    <Navbar />
    {
     err?
      
      
     <Popup open={true}>
      <div style={{backgroundColor:"white",color:'black'}}>{err}</div>
   </Popup>
     
    :<></>
     
   }
     
    {/* main content*/}
    <Container className="maincon" >
   
      <Row className="bannerContainer bigRow" id="LandingBanner">
        <Col className="first heading1" lg={12} md={12} sm={12}>   
        <div className="headinBanner" 
          style={{
            display:'flex',
            justifyContent:'center',
            marginTop:'100px',
            paddingTop:'100px',
            fontSize:'50px'
          }}
        > 
          <div className="headingText">
            <h5 className="text-white heading2" style={{fontSize:'5rem'}}>CODEDIGGER</h5>
            <br></br><br></br>
            <h5 className="text-white heading2">
              <Typewriter
                options={{
                  strings: ['Dig Deeper Into Coding'],
                  autoStart: true,
                  loop: true,
                }}
                style={{fontSize:"40px"}}/>
            </h5>
          </div>     
          {/* <div className="headingImage"><img src={image} className="floating"></img></div> */}
        </div>
        </Col>
        </Row>
        

        {/*Features Section*/} 
       <Row className="bigRow">
            <div className="featureHeading"><h1>FEATURES</h1></div>
            <Row className="featureRow">
              <Col md="4" className="featureRowCol">
                <div className="featureRowColInfo" style={{paddingTop:'25%',backgroundColor:'#E6F8F3',color:'black'}}>
                  <h3 style={{color:'black'}}>Feature 1</h3>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </div>
              </Col>             
              <Col md="8" className="featureRowCol" style={{width:'12.499999995%'}}>
              <div className="featureRowColInfo">
                  <h4>Image</h4>
                </div>
              </Col>             
            </Row>
            <Row className="featureRow">
              <Col md="4" className="featureRowCol">
                <div className="featureRowColInfo" style={{paddingTop:'25%',backgroundColor:'#FDEDEC',color:'black'}}>
                  <h4 style={{color:'black'}}>Feature 1</h4>
                </div>
              </Col>             
              <Col md="8" className="featureRowCol" style={{width:'12.499999995%'}}>
              <div className="featureRowColInfo">
                  <h4>Image</h4>
                </div>
              </Col>             
            </Row>
            <Row className="featureRow">
              <Col md="4" className="featureRowCol">
                <div className="featureRowColInfo">
                  <h4>Feature 1</h4>
                </div>
              </Col>             
              <Col md="8" className="featureRowCol" style={{width:'12.499999995%'}}>
              <div className="featureRowColInfo">
                  <h4>Image</h4>
                </div>
              </Col>             
            </Row>
            <Row className="featureRow">
              <Col md="4" className="featureRowCol">
                <div className="featureRowColInfo">
                  <h4>Feature 1</h4>
                </div>
              </Col>             
              <Col md="8" className="featureRowCol" style={{width:'12.499999995%'}}>
              <div className="featureRowColInfo">
                  <h4>Image</h4>
                </div>
              </Col>             
            </Row>
          </Row>

        
      
          
          <br/>
          <br/>
          
          
          {/*videos section*/}
          <Row className="bigRow">
            <h1 style={{
              textAlign:"center",
              marginBottom:"30px"
            }}>Resources</h1>
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
          </Row>

          <Row className="bigRow">
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
       {/* <Testimonial/> */}
       <Footer />

     
    </>
  );
};

export default Homepage;
