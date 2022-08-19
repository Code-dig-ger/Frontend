import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Header/Navbar'
import FooterSmall from '../../components/Footer/FooterSmall'
import MainCard from '../../components/MainCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OverlayTrigger, Button, Tooltip } from 'react-bootstrap'
import {
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons'
import './LaddersQuestionPage.css'

import Loading from '../logreg/loading'

const renderTooltip1 = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    First Page
  </Tooltip>
)

const renderTooltip2 = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Previous Page
  </Tooltip>
)

const renderTooltip3 = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Next Page
  </Tooltip>
)

const renderTooltip4 = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Last Page
  </Tooltip>
)

function LaddersQuestionPage(props) {
  // console.log(props);
  const [type1, setType1] = useState(
    props.type === 'list' ? 'practice' : 'ladder'
  )
  const [problems, setProblems] = useState(null)
  const [show, setShow] = useState(true)
  const creds = JSON.parse(localStorage.getItem('creds'))
  const [prevPage, setPrevPage] = useState('')
  const [firstPage, setFirstPage] = useState(
    '/' + props.wise + '/' + type1 + '/' + props.slug + '?page=1'
  )
  const [nextPage, setNextPage] = useState('')
  const [lastPage, setLastPage] = useState('')
  const [locked, setlocked] = useState(false)

  //for reload button after doing the question
  const updateReload = () => {
    window.location.reload()
  }

  useEffect(() => {
    if (problems != null) {
      //URLs for related pages
      setPrevPage(
        '/' +
          props.wise +
          '/' +
          type1 +
          '/' +
          props.slug +
          '?page=' +
          (problems.meta.current_page - 1)
      )
      setNextPage(
        '/' +
          props.wise +
          '/' +
          type1 +
          '/' +
          props.slug +
          '?page=' +
          (problems.meta.current_page + 1)
      )
      setLastPage(
        '/' +
          props.wise +
          '/' +
          type1 +
          '/' +
          props.slug +
          '?page=' +
          problems.meta.last_page
      )

      //if the last unsolved question is not at this page
      if (problems.meta.curr_unsolved_page != problems.meta.current_page) {
        setlocked(true)
      }
    }
  })

  useEffect(() => {
    if (creds) {
      async function fetchData() {
        const res = await fetch(
          `http://143.110.253.225/lists/${props.wise}/${props.type}/${props.slug}${props.pageNo}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${creds.access}`,
            },
          }
        )
        res
          .json()
          .then((res) => setProblems(res))
          .then((show) => setShow(false))
      }
      fetchData()
    } else {
      async function fetchData() {
        const res = await fetch(
          `http://143.110.253.225/lists/${props.wise}/${props.type}/${props.slug}${props.pageNo}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        res
          .json()
          .then((res) => setProblems(res))
          .then((show) => setShow(false))
      }
      fetchData()
    }
  }, [])

  var count = 0
  var solvedBtn = -1
  var button = false

  return show == true ? (
    <Loading />
  ) : (
    <div>
      <Navbar />
      <h2 style={{ textAlign: 'center', marginTop: '120px', fontSize: '45px' }}>
        {problems.meta.name}
      </h2>

      {/* Button to reload the page whenever the user solves a question */}
      <Button variant="success" className="updateBtn" onClick={updateReload}>
        Update
      </Button>
      <div
        className="container-fluid"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0rem 0rem',
        }}
      >
        {/* if it is first page dont display prev and first page pointers */}
        {problems.meta.current_page != 1 ? (
          <>
            <OverlayTrigger placement="top" overlay={renderTooltip1}>
              <a href={firstPage}>
                <FontAwesomeIcon
                  className="pageNavIcons"
                  icon={faAngleDoubleLeft}
                />
              </a>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={renderTooltip2}>
              <a href={prevPage}>
                <FontAwesomeIcon
                  className="pageNavIcons"
                  icon={faAngleLeft}
                  style={{ marginLeft: '13px' }}
                />
              </a>
            </OverlayTrigger>
          </>
        ) : (
          <></>
        )}

        {problems.meta.current_page === 1 ? (
          <div
            className="container-card marginLeftOfCards"
            style={{ marginTop: '75px' }}
          >
            {problems.result.map((ProblemData) => {
              count++
              if (ProblemData.solved === false && solvedBtn === -1) {
                solvedBtn = count
              }
              return (
                <>
                  {locked ? (
                    <MainCard
                      type={props.type}
                      count={20}
                      ProblemData={ProblemData}
                      solvedBtn={10}
                    />
                  ) : (
                    <MainCard
                      type={props.type}
                      count={count}
                      ProblemData={ProblemData}
                      solvedBtn={solvedBtn}
                    />
                  )}
                </>
              )
            })}
          </div>
        ) : problems.meta.current_page == problems.meta.last_page ? (
          <div className="container-card" style={{ marginTop: '75px' }}>
            {problems.result.map((ProblemData) => {
              count++
              if (ProblemData.solved === false && solvedBtn === -1) {
                solvedBtn = count
              }
              return (
                <>
                  {locked ? (
                    <MainCard
                      type={props.type}
                      count={20}
                      ProblemData={ProblemData}
                      solvedBtn={10}
                      last={'true'}
                    />
                  ) : (
                    <MainCard
                      type={props.type}
                      count={count}
                      ProblemData={ProblemData}
                      solvedBtn={solvedBtn}
                      last={'true'}
                    />
                  )}
                </>
              )
            })}
          </div>
        ) : (
          <div className="container-card" style={{ marginTop: '75px' }}>
            {problems.result.map((ProblemData) => {
              count++
              if (ProblemData.solved === false && solvedBtn === -1) {
                solvedBtn = count
              }
              return (
                <>
                  {locked ? (
                    <MainCard
                      type={props.type}
                      count={20}
                      ProblemData={ProblemData}
                      solvedBtn={10}
                    />
                  ) : (
                    <MainCard
                      type={props.type}
                      count={count}
                      ProblemData={ProblemData}
                      solvedBtn={solvedBtn}
                    />
                  )}
                </>
              )
            })}
          </div>
        )}

        {/* if it is last page, dont display last and next pointers */}
        {problems.meta.current_page != problems.meta.last_page ? (
          <>
            <OverlayTrigger placement="top" overlay={renderTooltip3}>
              <a href={nextPage} style={{ position: 'absolute', right: '7%' }}>
                <FontAwesomeIcon className="pageNavIcons" icon={faAngleRight} />
              </a>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={renderTooltip4}>
              <a href={lastPage} style={{ position: 'absolute', right: '2%' }}>
                <FontAwesomeIcon
                  className="pageNavIcons"
                  icon={faAngleDoubleRight}
                />
              </a>
            </OverlayTrigger>
          </>
        ) : (
          <></>
        )}
      </div>

      <FooterSmall />
    </div>
  )
}

export default LaddersQuestionPage
