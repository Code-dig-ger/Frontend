import React from 'react'
import './upsolve.style.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Carousel from 'react-multi-carousel';
import Navbar from '../../components/headerComponent/Navbar'
import FooterSmall from '../../components/footerComponent/FooterSmall';



const Virtual =()=>{
   
    const data={"status": "OK",
    "result": [
      {
        "id": 1388,
        "name": "Codeforces Round #660 (Div. 2)",
        "problems": [
          {
            "contestId": 1388,
            "index": "A",
            "name": "Captain Flint and Crew Recruitment",
            "type": "PROGRAMMING",
            "points": 750,
            "rating": 800,
            "tags": [
              "brute force",
              "greedy",
              "math",
              "number theory"
            ],
            "result": "solved"
          },
          {
            "contestId": 1388,
            "index": "B",
            "name": "Captain Flint and a Long Voyage",
            "type": "PROGRAMMING",
            "points": 1000,
            "rating": 1000,
            "tags": [
              "greedy",
              "math"
            ],
            "result": "solved"
          },
          {
            "contestId": 1388,
            "index": "C",
            "name": "Uncle Bogdan and Country Happiness",
            "type": "PROGRAMMING",
            "points": 1500,
            "rating": 1800,
            "tags": [
              "dfs and similar",
              "greedy",
              "math",
              "trees"
            ],
            "result": "solved"
          },
          {
            "contestId": 1388,
            "index": "D",
            "name": "Captain Flint and Treasure",
            "type": "PROGRAMMING",
            "points": 2000,
            "rating": 2000,
            "tags": [
              "data structures",
              "dfs and similar",
              "graphs",
              "greedy",
              "implementation",
              "trees"
            ],
            "result": "upsolved"
          },
          {
            "contestId": 1388,
            "index": "E",
            "name": "Uncle Bogdan and Projections",
            "type": "PROGRAMMING",
            "points": 2750,
            "rating": 2700,
            "tags": [
              "data structures",
              "geometry",
              "sortings"
            ],
            "result": "wrong"
          }
        ]
      },
      {
        "id": 1389,
        "name": "Educational Codeforces Round 92 (Rated for Div. 2)",
        "problems": [
          {
            "contestId": 1389,
            "index": "A",
            "name": "LCM Problem",
            "type": "PROGRAMMING",
            "rating": 800,
            "tags": [
              "constructive algorithms",
              "greedy",
              "math",
              "number theory"
            ],
            "result": "solved"
          },
          {
            "contestId": 1389,
            "index": "B",
            "name": "Array Walk",
            "type": "PROGRAMMING",
            "rating": 1600,
            "tags": [
              "brute force",
              "dp",
              "greedy"
            ],
            "result": "solved"
          },
          {
            "contestId": 1389,
            "index": "C",
            "name": "Good String",
            "type": "PROGRAMMING",
            "rating": 1500,
            "tags": [
              "brute force",
              "dp",
              "greedy",
              "two pointers"
            ],
            "result": "upsolved"
          },
          {
            "contestId": 1389,
            "index": "D",
            "name": "Segment Intersections",
            "type": "PROGRAMMING",
            "rating": 2100,
            "tags": [
              "brute force",
              "greedy",
              "implementation",
              "math"
            ],
            "result": "wrong"
          },
          {
            "contestId": 1389,
            "index": "E",
            "name": "Calendar Ambiguity",
            "type": "PROGRAMMING",
            "rating": 2200,
            "tags": [
              "math",
              "number theory"
            ],
            "result": "wrong"
          },
          {
            "contestId": 1389,
            "index": "F",
            "name": "Bicolored Segments",
            "type": "PROGRAMMING",
            "rating": 2600,
            "tags": [
              "data structures",
              "dp",
              "graph matchings",
              "sortings"
            ],
            "result": "not_attempt"
          },
          {
            "contestId": 1389,
            "index": "G",
            "name": "Directing Edges",
            "type": "PROGRAMMING",
            "rating": 2800,
            "tags": [
              "dfs and similar",
              "dp",
              "graphs",
              "trees"
            ],
            "result": "not_attempt"
          }
        ]
      }
    ]
  }//get from API--->LOGIC IMPLEMENTED//fake json erased
     
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
       <Navbar/><br></br>
        <h5 className="heads">Virtual Contests</h5>
        <div className="flags">
        <h5 className="correct">Solved</h5>
        <h5 className="incorrect">Wrong</h5>
        <h5 className="todo">Upsolve</h5>
      </div>
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


           <FooterSmall/>
        </>
            )
   
}
export default Virtual