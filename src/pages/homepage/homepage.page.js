import React, {useEffect,useState} from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./homepage.styles.css";
import AOS from 'aos';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/footer';
import '../../../node_modules/reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import FriendSVG from '../../assets/homepage/images/FriendSVG.js';
import ProfileFeature from '../../assets/homepage/images/ProfileFeature';
import ThirdIcon from '../../assets/homepage/images/ThirdIcon';
import UpsolveIcon from '../../assets/homepage/images/UpsolveIcon';
import LadderIcon from '../../assets/homepage/images/LadderIcon';
import Saly10 from '../../assets/homepage/images/Saly10.png'

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
      <div style={{color:'white',backgroundColor:'black',padding:'4px'}}>{err}</div>
   </Popup>
     
    :<></>
     
   }
     
    
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
            </h5>
          </div>     
        </div>
        </Col>
        
        </Row>

        <Row className="qouteRoww bigRow">
          <Col className="qoute-row" lg={11} md={11} sm={11}>
            <div id="qouteDiv">
            <p>We at Codedigger have grinded lots of websites together to provide you a single platform with all the features to start your journey of competitive programming, “From Beginner to Pro.” </p>
            <p style={{textAlign:'end',fontSize:'2rem'}}> - Team CodeDigger</p>
            </div>
          </Col>
        </Row>
        
        

        {/*Features Section*/} 
       <Row style={{paddingTop:'5rem'}} className="bigRow">
            <div className="featureHeading"><h1>FEATURES</h1></div>
            <Row style={{marginTop:'2rem'}} >
              <Col lg={11} sm={11} md={11} className='fourthRoww' id='friendFtRow' style={{background:'linear-gradient(360deg, hsla(39, 83%, 77%, 1) 0%, hsla(39, 90%, 30%, 1) 100%)'}}>
              <UpsolveIcon/>
                <div className='friendContent'>
                  <h2 style={{color:'rgb(255 203 149)'}}>UpSolve</h2>
                  <div id='fourthRowContent'>
                  The site provides the feature of upsolving the problems in a live or a virtual contest from three sites including Codechef, Codeforces, and Atcoder which helps the users to analyze their mistakes and thus provides scope for improvement.
                  </div>
                </div>
                
              </Col>
            </Row>

            <Row style={{marginTop:'2rem'}}>
              <Col lg={11} sm={11} md={11} className='fourthRoww' id='friendFtRow' style={{background:'linear-gradient(-135deg, #590a0d 0%, #10071c 100%)',height:'79vh'}}>
              
                <div style={{marginLeft:'2rem',zIndex:'2',paddingTop:'0'}} className='friendContent'>
                  <h2 style={{color:'#ff3a4f'}}>Ladders</h2>
                  <div id='fourthRowContent'>
                  It helps in listing the problems topic wise and levelwise (that is on the basis of difficulty). Before attempting the new problems the user has to make sure that he/she has solved all the previously listed problems.
                  </div>
                </div>
                <LadderIcon/>
              </Col>
            </Row>
            <Row style={{marginTop:'4rem'}}>
              <Col lg={11} sm={11} md={11} id='friendFtRow'>
                <div className='friendContent'>
                  <h2>Friends and Mentors</h2>
                  <div>
                  Practicing CP alone can be a bit boring and frustrating. Codedigger helps the users to add a friend with whom they can practice problems and also a feature to add a mentor who can provide the guidance required, which makes the journey much easier and exciting.
                  </div>
                </div>
                <FriendSVG/>
              </Col>
            </Row>

            <Row style={{marginTop:'4rem'}}>
            <ProfileFeature/>
              <Col lg={8} sm={8} md={8} id='friendFtRow' style={{background: 'linear-gradient(to bottom, #203025 0%, #151516 100%)'}}>
              
                <div className='friendContent'>
                  <h2 style={{color:'#4CD265'}}>Profile</h2>
                  <div>
                  The site provides Competitive Programming profiles which help the users to analyze their algorithmic progress. Cards help the users to view their profiles for different Competitive Programming sites.                  </div>
                </div>
                
              </Col>
            </Row>

            <Row id='thirdRowIcon' style={{marginTop:'4rem'}}>
              <ThirdIcon/>
              <Col lg={5} sm={5} md={5} id='friendFtRow' style={{background: '#151516',marginRight:'1.5rem',marginLeft:'6rem'}}>
              
                <div className='friendContent'>
                  <h2 style={{color:'#f81337'}}>Rating Change Reminder</h2>
                  <div>
                  After participating in any contest, rating changes are emailed to the users on their registered email-ids, which helps them to analyze the mistakes and keep improving.                  </div>
                </div>
                
              </Col>
              <Col lg={5} sm={5} md={5} id='friendFtRow' style={{background: 'linear-gradient(to top, #636363, #a2ab58)',marginLeft:'1.8rem'}}>
              
                <div className='friendContent'>
                  <h2 style={{color:'#ffff57'}}>Problem/Contest Filter</h2>
                  <div>
                  Problems can be solved on the basis of difficulty and tags from five different platforms( Codechef, Codeforces, Atcoder, &nbsp;&nbsp;&nbsp;Spoj, and Uva Online Judge).
                  </div>
                </div>
                
              </Col>
            </Row>

            <Row style={{marginTop:'22rem',marginBottom:'2rem'}}>
              <Col lg={8} sm={8} md={8} id='friendFtRow' style={{background: 'linear-gradient(-135deg, #c6368a 0%, #673dc2 100%)',marginRight:'0'}}>
              
                <div className='friendContent'>
                  <h2 style={{color:'rgb(254 132 255)'}}>Your Personalised List Of Questions</h2>
                  <div>
                  As one keep solving lots of problems but have no way of keep track of all the problem or to store them in categorized way so to solve this issue we provide you with this feature in which you can make you problem list in a manner which will help you later for revision or sharing resources.
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

          
      
     
       </Container>
       <Footer />

     
    </>
  );
};

export default Homepage;
