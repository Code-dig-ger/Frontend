import React from 'react';
import {
  Button
} from 'reactstrap';
import './MainCard.css';



const MainCard = (props) => {
  if(props.buttonDis){
    return(
      <>
      <div className="card unsolvedCard">
      <h3 className="title">{props.ProblemData.name}</h3>
      <h6 className="mt-5 ml-3 pl-1">Platform: {props.ProblemData.platform}</h6>
      <div className="bar">
        <div className="emptybar" />
        <div className={props.ProblemData.status === "solved"? "filledbar": "exapmplebar"}></div>
      </div>
        <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="stroke" cx="60" cy="60" r="50"/>
          </svg>
        </div>
        <div className="container_card">
          <Button target="_blank" className="buttondisp" href={props.ProblemData.url}>Solve</Button>
        </div>
      </div>
    </>
    )
  }
  else{
  return(
    <>
      <div className="card">
      <h3 className={props.count > 1 ? "title_hide" : "title"}>{props.ProblemData.name}</h3>
      <h6 className={props.count > 1 ? "title_hide" : "mt-5 ml-3 pl-1"}>Platform: {props.ProblemData.platform}</h6>
      <h3 className={props.count > 1 ? "title_locked" : "title_hide"}>?</h3>
      <div className="bar">
        <div className="emptybar" />
        <div className={props.ProblemData.status === "solved"? "filledbar": ""}></div>
      </div>
        <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="stroke" cx="60" cy="60" r="50"/>
          </svg>
        </div>
        <div className="container_card">
            <a target="_blank" href={props.count > 1 ? "" : props.ProblemData.url}><div className={props.count > 1 ? "lock": "check"}></div></a>
        </div>
      </div>
    </>
  )
  }
};



export default MainCard;