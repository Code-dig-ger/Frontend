import React, { useState, useEffect } from 'react'
import './ProblemLadderCard.css'
import $ from 'jquery'

const ProblemLadderCard = (props) => {
  const creds = JSON.parse(localStorage.getItem('creds'))
  // console.log(props.wise);
  const [str2, setStr2] = useState(
    props.type === 'list' ? 'practice' : 'ladder'
  )
  const [str, setStr1] = useState(
    '/' + props.wise + '/' + str2 + '/' + props.slug
  )
  const [progWidth, setProgWidth] = useState('66%')
  const colorNumber = (props.index % 4) + 1
  const classCondition = props.wise == 'levelwise'
  useEffect(() => {
    setProgWidth(`${(props.user_solved / props.total) * 100}%`)
    // console.log(`${(props.user_solved/props.total) * 100}%`);
    // console.log(props)
  }, [])

  return (
    <>
      <div className="courses-container">
        <div className="course">
          <div
            className={`course-preview ${
              classCondition
                ? `bgIndex${colorNumber}`
                : `TopicbgIndex${colorNumber}`
            } `}
          >
            <h6 style={{ color: '#d9d9d9' }}>{props.wise1}</h6>
            <h5>{props.title}</h5>
          </div>
          <div className="course-info">
            <div className="progress-container">
              <div
                className={`progress ${
                  classCondition
                    ? `progbgIndex${colorNumber}`
                    : `TopicprogbgIndex${colorNumber}`
                } `}
              ></div>
              <div
                className="progressPercent"
                style={{ width: `${progWidth}` }}
              ></div>
            </div>
            <h6>{props.des}</h6>
            <br />
            <br />
            <h6>
              {props.user_solved == null ? (
                <>Please Login to View Your progress</>
              ) : (
                <>Solved : {props.user_solved}</>
              )}
            </h6>
            <h6>Total : {props.total}</h6>

            <a href={str} className={`btn bgIndex${colorNumber}`}>
              {props.type == 'ladder' ? (
                <>{props.first_time == true ? <>Start</> : <>Continue</>}</>
              ) : (
                <>Solve</>
              )}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProblemLadderCard
