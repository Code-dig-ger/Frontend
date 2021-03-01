import React from 'react'
import './loading.css'

const Loading=()=>{
        
    return(
        <div className="cube-wrapper">

  <svg style={{width:'135%',height:'135%'}} width="350" height="200" viewBox="0 0 350 200">
    <path style={{
      fill:'none',
      stroke:'whitesmoke',
      strokeWidth:'20',
      transformOrigin:'center center',
      MozAnimation:'load 1.2s ease-in-out infinite',
      WebkitAnimation:'load 1.2s ease-in-out infinite',
      animation:'load 1.2s ease-in-out infinite'
    }} className="lt" d="M 100 50 L 50 100 L 100 150"></path>
    <path style={{
      fill:'none',
      stroke:'whitesmoke',
      strokeWidth:'20',
      transformOrigin:'center center',
      MozAnimation:'load 1.2s ease-in-out infinite',
      WebkitAnimation:'load 1.2s ease-in-out infinite',
      animation:'load 1.2s ease-in-out infinite'
    }} className="slash" d="M 150 175 L 200 25"></path>
    <path style={{
      fill:'none',
      stroke:'whitesmoke',
      strokeWidth:'20',
      transformOrigin:'center center',
      MozAnimation:'load 1.2s ease-in-out infinite',
      WebkitAnimation:'load 1.2s ease-in-out infinite',
      animation:'load 1.2s ease-in-out infinite'
    }} className="gt" d="M 250 50 L 300 100 L 250 150"></path>
  </svg>

  <span className="loading" data-name="Loading">CODEDIGGER</span>
</div>
    )
}
export default Loading;