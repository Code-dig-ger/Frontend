import React,{useState,useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,ButtonToggle,Form, FormGroup,Label,Input,Row } from 'reactstrap';
import './MainCard.css';
import {OverlayTrigger,Tooltip} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolderPlus} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import { data } from 'jquery';

const renderTooltip1 = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Add to Playlist
  </Tooltip>
);

const MainCard = (props) => {

  const creds= JSON.parse(localStorage.getItem("creds"));
  const uu = props.handle;
  const [modal, setModal] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [error, setErrors] = useState(false);
  const [problemAdd, setProblemAdd] = useState({});

  useEffect(() => {
    console.log(modal);
  })


  async function getPlaylists()
  {
    const res = await fetch(`https://api.codedigger.tech/lists/userlist/`, {
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${creds.access}`
            }
            });
            res
                .json()
                .then(res => setPlaylists(res))
                .catch(error => setErrors(true));
  }

  function toggle(event) {
    event.preventDefault();
    setModal(!modal);
    console.log(modal);
    
    if(!modal)
    {
      console.log("ppppppp");
      getPlaylists();
      // fetchData();
    }
    console.log(playlists);
  };

  function addProblem(slug, prob_id, platform){
    let p;
    if(platform === "Codeforces"){
      p = "F";
    }else if(platform === "Codechef"){
      p = "C";
    }else if(platform === "Atcoder"){
      p = "A";
    }else if(platform === "UVA"){
      p = "U";
    }else if(platform === "SPOJ"){
      p = "S";
    }

    console.log(slug, prob_id, platform)
      fetch (`https://api.codedigger.tech/lists/userlist/add`,{
          method:"POST",
          headers:{
              "Content-type":"application/json",
              "Authorization":`Bearer ${creds.access}`
          },
          body:JSON.stringify({
              "prob_id": prob_id,
              "slug": slug,
              "platform": p
          })
      }).then(data => setProblemAdd(data));
      
      if(problemAdd.status == 200){
        alert("Problem Added")
      }else{
        alert("Problem already added")
      }
      
      
  }

  if(props.type === "ladder")
  {
    if(props.solvedBtn === props.count){
      return(
        <>
        <div className="card unsolvedCard">
        <h3 className="title">{props.ProblemData.name}</h3>
          <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add to Playlist</ModalHeader>
        <ModalBody>
        </ModalBody>
          <ul>
          {playlists.map((list) => {
            return(
              <>
                <li>
                  <span style={{color:"white", fontSize:"19px"}}>{list.slug}</span>
                  <Button 
                            onClick={() => {addProblem(list.slug, props.ProblemData.prob_id, props.ProblemData.platform)}}
                            color="success" 
                            style={{padding:"5px 7px", 
                            position:"relative", 
                            left:"20px", 
                            bottom:"0",
                            borderRadius:"10%"}}>
                              Add
                            </Button>
                            
                </li>
              </>
            )
          })}
          </ul>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
      
      <h6 style={{marginTop:'6rem'}} className="ml-3 pl-1">Platform: {props.ProblemData.platform}</h6>
        <div style={{marginTop:'2rem'}} className="bar">
          <div className="emptybar" />
          <div className={props.ProblemData.status === "solved"? "filledbar": "exapmplebar"}></div>
        </div>
        <Button className="SolveButton" color='success'><a className="SolveLink" href={props.ProblemData.url}>Solve</a></Button>
        <OverlayTrigger
            placement="top"
            overlay={renderTooltip1}
          >
        <Button onClick={toggle} className="SaveButton" color='primary'>Save</Button></OverlayTrigger>
        </div>
      </>
      )
    }
    else{
    return(
      <>
        <div className="card">
        <h3 className={(props.count > props.solvedBtn && props.solvedBtn!=-1) ? "title_hide" : "title"}>{props.ProblemData.name}</h3>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add to Playlist</ModalHeader>
        <ModalBody>
        </ModalBody>
          <ul>
          {playlists.map((list) => {
            return(
              <>
                <li>
                  
                  <span style={{color:"white", fontSize:"19px"}}>{list.name}</span>
                  <Button 
                            onClick={addProblem(list.slug, props.ProblemData.prob_id, props.ProblemData.platform)}
                            color="success" 
                            style={{padding:"5px 7px", 
                            position:"relative", 
                            left:"20px", 
                            bottom:"0",
                            borderRadius:"10%"}}>
                              Add
                            </Button>
                            
                </li>
              </>
            )
          })}
          </ul>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
        {/* {(props.count > props.solvedBtn && props.solvedBtn!=-1) ? <></>:<span><OverlayTrigger
            placement="top"
            overlay={renderTooltip1}
          >
            <a href=""><FontAwesomeIcon icon={faFolderPlus} /></a>
          </OverlayTrigger></span>} */}
        <h6 style={{marginTop:'6rem'}} className={(props.count > props.solvedBtn && props.solvedBtn!=-1) ? "title_hide" : "marginTop6 ml-3 pl-1"}>Platform: {props.ProblemData.platform}</h6>
        <h3 className={(props.count > props.solvedBtn && props.solvedBtn!=-1) ? "title_locked" : "title_hide"}>?</h3>
        <div style={{marginTop:'2rem'}} className="bar">
          <div className="emptybar" />
          <div className={props.ProblemData.status === "solved"? "filledbar": ""}></div>
        </div>
        {/* <Button className="SolveButton" color='success'><a className="SolveLink" href={props.ProblemData.url}>Solve</a></Button> */}
        {(props.count > props.solvedBtn && props.solvedBtn!=-1) ? <><Button style={{marginTop:'4rem',marginTop:'4rem'}} id="lockHover" className="SolveButton" color='success'><a className="SolveLink" href={(props.count > props.solvedBtn && props.solvedBtn!=-1) ? "" : props.ProblemData.url}><FontAwesomeIcon id="lockIcon" style={{width:'2.5rem',height:'2.5rem',color:'red'}} icon={faLock}/></a></Button></>: <><Button className="DoneButton" color='success'><a className="DoneLink" href={props.ProblemData.url}>Done</a></Button></>}
        {(props.count > props.solvedBtn && props.solvedBtn!=-1) ? <></>:<><OverlayTrigger
            placement="top"
            overlay={renderTooltip1}
          >
        <Button onClick={toggle} className="SaveButton" color='primary'>Save</Button></OverlayTrigger></>}
        </div>
      </>
    )
    }
    
  }

  else
  {
    if(props.solvedBtn === props.count)
    {
      return(
        <>
        <div className="card unsolvedCard">
        <h3 className="title">{props.ProblemData.name}</h3>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add to Playlist</ModalHeader>
        <ModalBody>
        </ModalBody>
          <ul>
          {playlists.map((list) => {
            return(
              <>
                <li>
                  <span style={{color:"white", fontSize:"19px"}}>{list.name}</span>
                  <Button 
                             onClick={() => {addProblem(list.slug, props.ProblemData.prob_id, props.ProblemData.platform)}}
                            color="success" 
                            style={{padding:"5px 7px", 
                            position:"relative", 
                            left:"20px", 
                            bottom:"0",
                            borderRadius:"10%"}}>
                              Add
                            </Button>
                            
                </li>
              </>
            )
          })}
          </ul>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
        <h6 style={{marginTop:'6rem'}} className="ml-3 pl-1">Platform: {props.ProblemData.platform}</h6>
        <div style={{marginTop:'2rem'}} className="bar">
          <div className="emptybar" />
          <div className={props.ProblemData.status === "solved"? "filledbar": "exapmplebar"}></div>
        </div>
        <Button className="SolveButton" color='success'><a className="SolveLink" href={props.ProblemData.url}>Solve</a></Button>
        <OverlayTrigger
            placement="top"
            overlay={renderTooltip1}
          >
        <Button onClick={toggle} className="SaveButton" color='primary'>Save</Button></OverlayTrigger>
        </div>
      </>
      )
    }
    else
    {
      if(props.ProblemData.solved === false)
      {
        return(
          <>
          <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add to Playlist</ModalHeader>
        <ModalBody>
        </ModalBody>
          <ul>
          {playlists.map((list) => {
            return(
              <>
                <li>
                  <span style={{color:"white", fontSize:"19px"}}>{list.name}</span>
                  <Button 
                            onClick={() => {addProblem(list.slug, props.ProblemData.prob_id, props.ProblemData.platform)}}
                            color="success" 
                            style={{padding:"5px 7px", 
                            position:"relative", 
                            left:"20px", 
                            bottom:"0",
                            borderRadius:"10%"}}>
                              Add
                            </Button>
                            
                </li>
              </>
            )
          })}
          </ul>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
        <div className="card">
        <h3 className="title">{props.ProblemData.name}</h3>
        <h6 style={{marginTop:'6rem'}} className="ml-3 pl-1">Platform: {props.ProblemData.platform}</h6>
        <div style={{marginTop:'2rem'}} className="bar">
          <div className="emptybar" />
          <div className="exapmplebar"></div>
        </div>
        <Button className="SolveButton" color='success'><a className="SolveLink" href={props.ProblemData.url}>Solve</a></Button>
        <OverlayTrigger
            placement="top"
            overlay={renderTooltip1}
          >
        <Button onClick={toggle} className="SaveButton" color='primary'>Save</Button></OverlayTrigger>
          {/* <div className={'circle ' + (props.pageLast=="true" ? 'circlePosLast':'circlePosNormal')}>
            <svg style={{width:'111px',height:'111px'}} version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle className="stroke" cx="60" cy="60" r="50"/>
            </svg>
          </div> */}
          {/* <div className="container_card">
            <Button target="_blank" className="buttondisp" href={props.ProblemData.url}>Solve</Button>
          </div> */}
          
        </div>
      </>
        )
      }
      else
      {
        console.log("Here i am");
        return(
          <>
          <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add to Playlist</ModalHeader>
        <ModalBody>
        </ModalBody>
          <ul>
          {playlists.map((list) => {
            return(
              <>
                <li>
                  <span style={{color:"white", fontSize:"19px"}}>{list.name}</span>
                  <Button 
                            onClick={() => {addProblem(list.slug, props.ProblemData.prob_id, props.ProblemData.platform)}}
                            color="success" 
                            style={{padding:"5px 7px", 
                            position:"relative", 
                            left:"20px", 
                            bottom:"0",
                            borderRadius:"10%"}}>
                              Add
                            </Button>
                            
                </li>
              </>
            )
          })}
          </ul>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
        <div className="card">
        <h3 className="title">{props.ProblemData.name}</h3>
        
        <h6 style={{marginTop:'6rem'}} className="ml-3 pl-1">Platform: {props.ProblemData.platform}</h6>
        <div style={{marginTop:'2rem'}} className="bar">
          <div className="emptybar" />
          <div className= "filledbar"></div>
        </div>
        <Button className="DoneButton" color='success'><a className="DoneLink" href={props.ProblemData.url}>Done</a></Button>
        <OverlayTrigger
            placement="top"
            overlay={renderTooltip1}
          >
        <Button onClick={toggle} className="SaveButton" color='primary'>Save</Button></OverlayTrigger>
        </div>
      </>
        )
      }
    }
  }

};



export default MainCard;