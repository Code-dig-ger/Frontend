import React,{useState,useEffect} from 'react';
import './LaddersContent.css';
import $ from 'jquery';


const LaddersContent = (props) => {
  const creds= JSON.parse(localStorage.getItem("creds"));
  console.log(props.wise);
  const [str2,setStr2]=useState(props.type === "list" ? "practice":"ladder")
  const [str,setStr1]=useState("/" + props.wise + "/" + str2 + "/" + props.slug);

  const [bgIndex,setBgIndex]=useState((props.index % 4)+1);
  const [progWidth, setProgWidth] = useState('66%');

  useEffect(() => {
    setProgWidth(`${props.user_solved/props.total * 100}%`);
    console.log(`${(props.user_solved/props.total) * 100}%`);
    // console.log(props)
  }, [])

  if(props.wise == "levelwise")
  {
    return (
      <>
                <div className="courses-container">
              <div className="course">
                <div className={"course-preview " + (bgIndex == 1 ? 'bgIndex1':(bgIndex == 2 ? 'bgIndex2':(bgIndex == 3 ? 'bgIndex3':(bgIndex == 4 ? 'bgIndex4':''))))}>
                  <h6 style={{color:"#d9d9d9"}}>{props.wise1}</h6>
                  <h5>{props.title}</h5>
                </div>
                <div className="course-info">
                  <div className="progress-container">
                    <div className={"progress " + (bgIndex == 1 ? 'progbgIndex1':(bgIndex == 2 ? 'progbgIndex2':(bgIndex == 3 ? 'progbgIndex3':(bgIndex == 4 ? 'progbgIndex4':''))))}></div>
                    <div className="progressPercent" style={{width:`${progWidth}`}}></div>
                  </div>
                  <h6>{props.des}</h6>
                  <br/>
                  <br/>
                  <h6>{props.user_solved == null ? <>Please Login to View Your progress</>:<>Solved : {props.user_solved}</>}</h6>
                  <h6>Total : {props.total}</h6>
                  
                  <a href={str} className={"btn " + (bgIndex == 1 ? 'bgIndex1':(bgIndex == 2 ? 'bgIndex2':(bgIndex == 3 ? 'bgIndex3':(bgIndex == 4 ? 'bgIndex4':''))))}>
                    {props.type == "ladder" ? <>
                    {props.user_solved == 0 ? <>Start</>:<>Solve</>}
                    </>:<>Solve</>}
                  </a>
                </div>
              </div>
            </div>
  
      </>
    );
  }
  else
  {
    return (
      <>
                <div className="courses-container">
              <div className="course">
                <div className={"course-preview " + (bgIndex == 1 ? 'TopicbgIndex1':(bgIndex == 2 ? 'TopicbgIndex2':(bgIndex == 3 ? 'TopicbgIndex3':(bgIndex == 4 ? 'TopicbgIndex4':''))))}>
                  <h6 style={{color:"#d9d9d9"}}>{props.wise1}</h6>
                  <h5>{props.title}</h5>
                </div>
                <div className="course-info">
                  <div className="progress-container">
                    <div className={"progress " + (bgIndex == 1 ? 'TopicprogbgIndex1':(bgIndex == 2 ? 'TopicprogbgIndex2':(bgIndex == 3 ? 'TopicprogbgIndex3':(bgIndex == 4 ? 'TopicprogbgIndex4':''))))}></div>
                    <div className="progressPercent" style={{width:`${progWidth}`}}></div>
                  </div>
                  <h6>{props.des}</h6>
                  <br/>
                  <br/>
                  <h6>{props.user_solved == null ? <>Please Login to View Your progress</>:<>Solved : {props.user_solved}</>}</h6>
                  <h6>Total : {props.total}</h6>
                  {console.log(str)}
                  <a href={str} className={"btn " + (bgIndex == 1 ? 'bgIndex1':(bgIndex == 2 ? 'bgIndex2':(bgIndex == 3 ? 'bgIndex3':(bgIndex == 4 ? 'bgIndex4':''))))}>
                    {props.type == "ladder" ? <>
                    {props.user_solved==0 ? <>Start</>:<>Solve</>}
                    </>:<>Solve</>}
                  </a>
                </div>
              </div>
            </div>
  
      </>
    );
  }

}

export default LaddersContent;