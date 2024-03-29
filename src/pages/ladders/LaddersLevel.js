import React, { useState, useEffect } from 'react'
import Loading from '../logreg/loading'
import Header from '../../components/Header/Navbar'
import './LaddersLevel.css'
import ProblemLadderCard from '../../components/ProblemLadderCard'
import FooterSmall from '../../components/Footer/FooterSmall'
import ErrorPage from '../ErrorPage/ErrorPage.js'
import { getLists, getListsWithoutAuth } from '../../actions/lists.actions'

function LaddersLevel(props) {
  const creds = JSON.parse(localStorage.getItem('creds'))

  const [data, setData] = useState([])

  const [show, setShow] = useState(true)

  //whether levelwise or topic wise
  const [wise1, setwise1] = useState(
    props.wise == 'topicwise' ? 'Topic' : 'Level'
  )

  console.log(props)
  useEffect(() => {
    //fort accessing ladders, user has to be logged in
    if (props.type == 'ladder' && !creds) {
      alert('Please Login to Proceed')
      window.location = '/login'
    }

    async function fetchData() {
      // if creds are available i.e. user is logged in, pass authentication
      if (creds) {
        await getLists(creds.access, props.wise, props.type)
          .then((res) => setData(res))
          .then((show) => setShow(false))
      } else {
        await getListsWithoutAuth(props.wise, props.type)
          .then((res) => setData(res))
          .then((show) => setShow(false))
      }
    }
    fetchData()
  }, [])

  if (show) {
    return <Loading />
  } else {
    if (data) {
      return (
        <div className="ladder">
          <Header />

          <div
            className="container ladders_ques"
            style={{ marginTop: '80px', marginBottom: '100px' }}
          >
            <br />
            {data.map((level, index) => {
              return (
                <>
                  <ProblemLadderCard
                    key={index}
                    title={level.name}
                    des={level.description}
                    slug={level.slug}
                    wise1={wise1}
                    wise={props.wise}
                    type={props.type}
                    index={index}
                    user_solved={level.user_solved}
                    total={level.total}
                    first_time={level.first_time ? true : false}
                  />
                  <br />
                </>
              )
            })}
          </div>
          <FooterSmall />
        </div>
      )
    } else {
      return <ErrorPage />
    }
  }
}

export default LaddersLevel
