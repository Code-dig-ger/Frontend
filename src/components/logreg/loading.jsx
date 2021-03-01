import React from 'react'
import './loading.css'

const Loading=()=>{
        
    return(
        <div className="cube-wrapper">

  <svg width="350" height="200" viewBox="0 0 350 200">
    <path className="lt" d="M 100 50 L 50 100 L 100 150"></path>
    <path className="slash" d="M 150 175 L 200 25"></path>
    <path className="gt" d="M 250 50 L 300 100 L 250 150"></path>
  </svg>

  <span className="loading" data-name="Loading">CODEDIGGER</span>
</div>
    )
}
export default Loading;