import React from 'react';
import './LaddersContent.css'
const LaddersContent = (props) => {
  return (
    <>
              <div className="courses-container">
            <div className="course">
              <div className="course-preview">
                <h6>Topic</h6>
                <h5>{props.title}</h5>
              </div>
              <div className="course-info">
                <div className="progress-container">
                  <div className="progress"></div>
                  
                </div>
                <h6>{props.des}</h6>
                
                <a href="/laddersLevel/topic/page1" className="btn">Solve</a>
              </div>
            </div>
          </div>

    </>
  );
}

export default LaddersContent;