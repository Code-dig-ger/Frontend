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
import {Bee} from '@carbon/icons-react';
import whiteHand from '../../assets/homepage/images/whiteHand.png';
import FriendSVG from '../../assets/homepage/images/FriendSVG.js';
import ProfileFeature from '../../assets/homepage/images/ProfileFeature';
import ThirdIcon from '../../assets/homepage/images/ThirdIcon';
import UpsolveIcon from '../../assets/homepage/images/UpsolveIcon';
import LadderIcon from '../../assets/homepage/images/LadderIcon';
import PlaylistIcon from '../../assets/homepage/images/PlaylistIcon';
import Saly10 from '../../assets/homepage/images/Saly10.png'

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
      <div className="pops">{err}</div>
   </Popup>
     
    :<></>
     
   }
     
    {/* main content*/}
    {/* <Add24 className="myCustomClas" /> */}
    {/* <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <defs>
          <linearGradient id="130_svg__a" x1="18.5" y1="22.5" x2="29.5" y2="11.5" gradientUnits="userSpaceOnUse"><stop offset=".5"></stop><stop offset=".95" stop-opacity="0"></stop></linearGradient>
          <linearGradient id="130_svg__c" y1="32" x2="32" gradientUnits="userSpaceOnUse"><stop offset=".1" stop-color="#be95ff"></stop><stop offset=".9" stop-color="#4589ff"></stop></linearGradient><mask id="130_svg__b" x="0" y="0" width="32" height="32" maskUnits="userSpaceOnUse"><path d="M27.79 6.238a7.495 7.495 0 00-10.684 0l-1.1 1.127-1.112-1.127a7.5 7.5 0 00-10.685 0 7.733 7.733 0 000 10.824L16 28.994l1.425-1.426-11.78-11.923a5.708 5.708 0 010-7.99 5.479 5.479 0 017.814 0l2.553 2.587 2.529-2.587a5.479 5.479 0 017.814 0 5.708 5.708 0 010 7.99l-6.314 6.4 1.426 1.426 6.323-6.4a7.733 7.733 0 000-10.833z" fill="#f2f2f2"></path><path fill="url(#130_svg__a)" d="M27 9l4 5-10 11-5-5L27 9z"></path></mask>
        </defs>
        <g data-name="Layer 2">
          <g data-name="Dark theme icons">
            <g mask="url(#130_svg__b)">
              <path fill="url(#130_svg__c)" d="M0 0h32v32H0z"></path>
            </g>
            <path fill="#f4f4f4" d="M28 20h-4v-4h-2v4h-4v2h4v4h2v-4h4v-2z"></path>
          </g>
        </g>
      </svg>
    </div> */}
    
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
              {/* <Typewriter
                options={{
                  strings: ['Dig Deeper Into Coding'],
                  autoStart: true,
                  loop: true,
                }}
                style={{fontSize:"40px"}}/> */}
            </h5>
          </div>     
          {/* <div className="headingImage"><img src={image} className="floating"></img></div> */}
        </div>
        </Col>
        <Row className="qouteRoww">
          {/* <img className="qouteHandImg" src={whiteHand} /> */}
          <Col className="qoute-row" lg={11} md={11} sm={11}>
          </Col>
        </Row>
        </Row>
        
        

        {/*Features Section*/} 
       <Row style={{paddingTop:'25rem'}} className="bigRow">
            <div className="featureHeading"><h1>FEATURES</h1></div>
            <Row style={{marginTop:'4rem'}}>
              <Col lg={11} sm={11} md={11} id='friendFtRow'>
                <div className='friendContent'>
                  <h2>Friends and Mentors</h2>
                  <div>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                  </div>
                </div>
                <FriendSVG/>
              </Col>
            </Row>

            <Row style={{marginTop:'4rem'}}>
            <ProfileFeature/>
              <Col lg={8} sm={8} md={8} id='friendFtRow' style={{background: 'linear-gradient(to bottom, #203025 0%, #151516 100%)'}}>
              
                <div className='friendContent'>
                  <h2 style={{color:'#4CD265'}}>Profile and Github connect</h2>
                  <div>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                  </div>
                </div>
                
              </Col>
            </Row>

            <Row id='thirdRowIcon' style={{marginTop:'4rem'}}>
              <ThirdIcon/>
              <Col lg={5} sm={5} md={5} id='friendFtRow' style={{background: '#151516',marginRight:'1.5rem',marginLeft:'6rem',height:'90vh'}}>
              
                <div className='friendContent'>
                  <h2 style={{color:'#f81337'}}>Rating Change Reminder</h2>
                  <div>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  </div>
                </div>
                
              </Col>
              <Col lg={5} sm={5} md={5} id='friendFtRow' style={{background: 'linear-gradient(to top, #636363, #a2ab58)',marginLeft:'1.8rem',height:'90vh'}}>
              
                <div className='friendContent'>
                  <h2 style={{color:'#ffff57'}}>Problem/Contest Filter</h2>
                  <div>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  </div>
                </div>
                
              </Col>
            </Row>

            <Row style={{marginTop:'13rem'}}>
              <Col lg={11} sm={11} md={11} className='fourthRoww' id='friendFtRow' style={{background:'linear-gradient(360deg, hsla(39, 83%, 77%, 1) 0%, hsla(39, 90%, 30%, 1) 100%)'}}>
              <UpsolveIcon/>
                <div className='friendContent'>
                  <h2 style={{color:'rgb(255 203 149)'}}>UpSolve</h2>
                  <div id='fourthRowContent'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                  </div>
                </div>
                
              </Col>
            </Row>

            <Row style={{marginTop:'2rem'}}>
              <Col lg={11} sm={11} md={11} className='fourthRoww' id='friendFtRow' style={{background:'linear-gradient(-135deg, #590a0d 0%, #10071c 100%)',height:'87vh'}}>
              
                <div style={{marginLeft:'2rem',zIndex:'2'}} className='friendContent'>
                  <h2 style={{color:'#ff3a4f'}}>Ladders</h2>
                  <div id='fourthRowContent'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                  </div>
                </div>
                <LadderIcon/>
              </Col>
            </Row>

            <Row style={{marginTop:'4rem'}}>
              <Col lg={8} sm={8} md={8} id='friendFtRow' style={{background: 'linear-gradient(-135deg, #c6368a 0%, #673dc2 100%)',marginRight:'0'}}>
              
                <div className='friendContent'>
                  <h2 style={{color:'rgb(254 132 255)'}}>Your Playlist Of Questions</h2>
                  <div>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                  </div>
                </div>
                
              </Col>
              <img id='playListImg' src={Saly10} />
            </Row>
            
          </Row>
          
          
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
