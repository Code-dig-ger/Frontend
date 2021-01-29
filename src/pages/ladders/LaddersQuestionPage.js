import React, {useState,useEffect} from 'react'
import Navbar from '../../components/headerComponent/Navbar';
import FooterSmall from '../../components/footerComponent/FooterSmall';
import MainCard from '../../components/MainCard';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {OverlayTrigger,Button,Tooltip} from 'react-bootstrap';
import {faAngleLeft,faAngleRight,faAngleDoubleLeft,faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'

import './LaddersQuestionPage.css';
import problemsData from './problemsData.json';
import $ from 'jquery';
import ReactTooltip from 'react-tooltip';

import Loading from '../logreg/loading';

const renderTooltip1 = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    First Page
  </Tooltip>
);

const renderTooltip2 = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Previous Page
  </Tooltip>
);

const renderTooltip3 = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Next Page
  </Tooltip>
);

const renderTooltip4 = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Last Page
  </Tooltip>
);

// async function fetchData(props)
//         {
//           const res=await fetch (`https://api.codedigger.tech/lists/${props.wise}/${props.type}/${props.slug}${props.pageNo}`,{
//             method:"GET",
//             headers:{
//               "Content-Type":"application/json",
//               "Authorization":`Bearer ${creds.access}`
//             }
//           });
//           res
//             .json()
//             .then(window.location.reload);
//         }

function LaddersQuestionPage(props) {

    console.log(props);
    const [type1,setType1] = useState(props.type==="list" ? "practice":"ladder")
    const [problems, setProblems] = useState(null);
    const [show, setShow] = useState(true);
    const creds= JSON.parse(localStorage.getItem("creds"));
    const [prevPage,setPrevPage] = useState("");
    const [firstPage,setFirstPage] = useState("/"+props.wise+"/"+type1+"/"+props.slug+"?page=1");
    const [nextPage,setNextPage] = useState("");
    const [lastPage,setLastPage] = useState("");
    const [locked,setlocked] = useState(false);

    useEffect(() => {
      if(problems!=null)
      {
        setPrevPage("/"+props.wise+"/"+type1+"/"+props.slug+"?page="+(problems.meta.current_page-1));
        setNextPage("/"+props.wise+"/"+type1+"/"+props.slug+"?page="+(problems.meta.current_page+1));
        setLastPage("/"+props.wise+"/"+type1+"/"+props.slug+"?page="+problems.meta.last_page);
        if(problems.result[0].solved===false && problems.meta.current_page!=1 && problems.meta.curr_prob!=problems.result[0].prob_id)
        {
          console.log("heyyyyy");
          setlocked(true);
        }
      }
    })

    useEffect(() => {
        async function fetchData()
        {
          const res=await fetch (`https://api.codedigger.tech/lists/${props.wise}/${props.type}/${props.slug}${props.pageNo}`,{
            method:"GET",
            headers:{
              "Content-Type":"application/json",
              "Authorization":`Bearer ${creds.access}`
            }
          });
          res
            .json()
            .then(res => setProblems(res))
            .then(show => setShow(false));
        }
        fetchData();
        
      },[])

    var count=0;
    var solvedBtn=-1;
    var button = false;
    return (
        show==true ? <Loading/>:<div>
            {console.log(problems)}
        <Navbar />
        <h2 style={{textAlign:"center"}}>{problems.meta.description}</h2>
        <Button variant="success" className="updateBtn">Update</Button>
        <div className="container-fluid" style={{display:"flex",flexDirection:"row",alignItems:"center",padding:"0rem 0rem"}}>

          {problems.meta.current_page!=1 ? <><OverlayTrigger
            placement="top"
            overlay={renderTooltip1}
          >
            <a href={firstPage}><FontAwesomeIcon className="pageNavIcons" icon={faAngleDoubleLeft} /></a>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={renderTooltip2}
          >
            <a href={prevPage}><FontAwesomeIcon className="pageNavIcons" icon={faAngleLeft} style={{marginLeft:"13px"}}/></a>
          </OverlayTrigger></>:<></>}
          

            {problems.meta.current_page===1 ? <div className="container-card marginLeftOfCards" style={{marginTop:"75px"}}>
                {problems.result.map((ProblemData)=>{
                    console.log(ProblemData.solved);
                    count++;
                    if(ProblemData.solved === false && solvedBtn===-1)
                    {
                        console.log("reached");
                        solvedBtn=count;
                    }
                    return(
                        <>
                        {console.log(locked)}
                          {locked ? <MainCard type={props.type} count={20} ProblemData={ProblemData} solvedBtn={10}/>:<MainCard type={props.type} count={count} ProblemData={ProblemData} solvedBtn={solvedBtn}/>}
                                
                                {console.log(count,ProblemData,solvedBtn)}
                        </>
                    )
                    
                }
                
                )}
                </div>:<div className="container-card" style={{marginTop:"75px"}}>
                {problems.result.map((ProblemData)=>{
                    console.log(ProblemData.solved);
                    count++;
                    if(ProblemData.solved === false && solvedBtn===-1)
                    {
                        console.log("reached");
                        solvedBtn=count;
                    }
                    return(
                        <>
                                {locked ? <MainCard type={props.type} count={20} ProblemData={ProblemData} solvedBtn={10}/>:<MainCard type={props.type} count={count} ProblemData={ProblemData} solvedBtn={solvedBtn}/>}
                                {console.log(count,ProblemData,solvedBtn)}
                        </>
                    )
                    
                }
                
                )}
                </div>}

                {problems.meta.current_page!=problems.meta.last_page ? <><OverlayTrigger
                  placement="top"
                  overlay={renderTooltip3}
                >
                  <a href={nextPage}><FontAwesomeIcon className="pageNavIcons" icon={faAngleRight} style={{marginLeft:"82px",marginRight:"12px"}}/></a>
                </OverlayTrigger>

                <OverlayTrigger
                  placement="top"
                  overlay={renderTooltip4}
                >
                  <a href={lastPage}><FontAwesomeIcon className="pageNavIcons" icon={faAngleDoubleRight} /></a>
                </OverlayTrigger></>:<></>}
          
                {/* <Col>
                    <MainCard solved="true"/>
                </Col>
                <Col>
                 <MainCard solved="false" />
                </Col>
                <Col>
                 <MainCard solved="false"/>
                </Col>
                <Col>
                  <MainCard solved="false"/>
                </Col> */}
        </div>
        

        <FooterSmall />
    </div>
    )
}

export default LaddersQuestionPage
