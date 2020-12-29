import React from 'react'
import { Container } from 'react-bootstrap';
import Codeforces from './images/codeforces2.png'
import Codechef from './images/codechef2.png'
import Atcoder from './images/atcoder2.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './profile.style.css'
import Pie from './pie'
import Bar from './bar'
import Navbar from '../../components/headerComponent/Navbar'
import Footer from '../../components/footerComponent/footer'

import Info from './FillInfo'


const Profile=()=>{
  
  const creds=JSON.parse(localStorage.getItem("creds"));
 // console.log(creds);
  const firstTime=creds.first;
 // console.log(firstTime);
  

       return(
         
        (firstTime===true)?<Info/>:
                   <>
         <Navbar/>
         {console.log(localStorage.getItem("creds"))}
         <br></br>  
         <br></br>
         <Container className="cont">
              <Row>
              <Col className="col2"lg={4} md={12} sm={12} order-sm-1><h4>User Profile</h4>
               <Row><div className="mypic">👑</div></Row>
               <Row><h5>Chhota Bheem</h5></Row>
               <Row><h6>username: Bheem</h6></Row>
               <Row><h6>handles: xybmdkgdk</h6></Row>
              </Col>
              <Col className="col1" lg={4} md={12} sm={12}>
              <Row><h5 className="col1row">Best Finish</h5></Row>
              <Row className="col1row1">
                  <Col className="each" lg={12} md={12} sm={12}>
              <img className="logo" src={Codeforces}></img>Codeforces :000</Col>
              <Col className="each" lg={12} md={12} sm={12}>
              <img className="logo" src={Codechef}></img>Codechef:0000</Col>
              <Col className="each" lg={12} md={12} sm={12}>
              <img className="logo"src={Atcoder}></img>Atcoder:000000</Col>
              </Row>
              <br></br><br></br>
              <Row><h5 className="col1row">Ratings</h5></Row>
              <Row className="col1row1">
              <Col className="each" lg={12} md={12} sm={12}>
              <img className="logo" src={Codeforces}></img>Codeforces :000</Col>
              <Col className="each" lg={12} md={12} sm={12}>
              <img className="logo" src={Codechef}></img>Codechef:0000</Col>
              <Col className="each" lg={12} md={12} sm={12}>
              <img className="logo"src={Atcoder}></img>Atcoder:000000</Col>
              </Row>
              <br></br>
              
              <br></br>
              </Col>
            
              <Col className="col3" lg={4} md={12} sm={12}>
               <Row className="charts" ><Pie></Pie></Row><br></br>
               <Row><h5 className="col1row">Achievements</h5></Row>
              <Row className="col1row1">
                 <p className="each">khfkkuegfkkfgkugkufkgkg kdhlhlhdlhlhflhlj,jh lihhljkjfugefulefjfebjflu khfkkuegfkkfgkugkufkgkg kdhlhlhdlhlhflhlj,jh lihhljkjfugefulefjfebjflu</p>
              </Row><br></br>
              <Row className="charts"><Bar></Bar></Row>
              </Col>
               
            </Row>
         
             
           
         </Container>
         <Footer/>
         </>
         
     )
}
export default Profile;