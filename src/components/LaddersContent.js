import React,{useState,useEffect} from 'react';
import './LaddersContent.css';


const LaddersContent = (props) => {
  console.log(props.type);
  const [str2,setStr2]=useState(props.type === "list" ? "practice":"ladder")
  const [str,setStr1]=useState("/" + props.wise + "/" + str2 + "/" + props.slug);
  console.log(str);
  return (
    <>
              <div className="courses-container">
            <div className="course">
              <div className="course-preview">
                <h6 style={{color:"#d9d9d9"}}>{props.wise1}</h6>
                <h5>{props.title}</h5>
              </div>
              <div className="course-info">
                <div className="progress-container">
                  <div className="progress"></div>
                  
                </div>
                <h6>{props.des}</h6>
                
                <a href={str} className="btn">Solve</a>
              </div>
            </div>
          </div>

    </>
  );
}

export default LaddersContent;