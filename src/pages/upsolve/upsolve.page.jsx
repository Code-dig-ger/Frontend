import React from 'react'
import './upsolve.style.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Carousel from 'react-multi-carousel';

const Upsolve=()=>{

  
    const data={}//get from API--->LOGIC IMPLEMENTED//fake json erased
     
        const result=data.result;//array of objects--1 object 1 contest
    ////////////////////////////data ended////////////////////////////////////
    const responisve={superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
       <>
       {result.map((res)=>{
       return(
         <>
         <div>
       <Row className="contestRow">
    <Col sm={2} md={2} lg={3}>< div className="contestName"><h6>{res.name}</h6></div></Col>
            <Col sm={2} md={2} lg={9}><Carousel responsive={responisve}>
               
            {
           
           res. problems.map((prob)=>{
                if(prob.result==="solved"){
                return(
                <Col><div className="solved text-black" ><h6>{prob.index}-{prob.name}</h6></div></Col>
                )}
                else if(prob.result==="wrong"){
                return(
                <Col> <div className="wrong"><h6>{prob.index}-{prob.name}</h6></div></Col>
                )}
                return(
                   <Col> <div className="upsolve"><h6>{prob.index}-{prob.name}</h6></div></Col>
                )
            })}
            </Carousel></Col>
            
            </Row>
            </div> 
            <br></br>
            <br></br>
            </>
       )})}


           
        </>
            )
    
}
export default Upsolve