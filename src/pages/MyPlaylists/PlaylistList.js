import React, { useEffect, useState } from 'react'
import FooterSmall from '../../components/Footer/FooterSmall'
import Navbar from '../../components/Header/Navbar'
import Loading from '../logreg/loading'
import './PlaylistList.css'
import { deleteUserlist, getThisUserlist } from '../../actions/lists.actions'

function PlaylistList(props) {
  const pageNumbers = []
  const creds = JSON.parse(localStorage.getItem('creds'))
  const [error, setErrors] = useState(false)
  const [playlist, setPlaylist] = useState([])
  //console.log(props.slug)

  async function deletePlaylist() {
    await deleteUserlist(creds.access, props.slug).catch((error) =>
      setErrors(true)
    )
    window.location.href = `/list/${creds.username}`
  }

  function deleteProblem(ans) {
    return fetch(
      `https://143.110.253.225/lists/userlist/edit/${props.slug}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${creds.access}`,
        },
        body: JSON.stringify({
          delete_probs: ans,
        }),
      }
    ).then((data) => data.json())
  }
  const deleteProb = (id, plat) => {
    let p
    if (plat === 'Codeforces') {
      p = 'F'
    } else if (plat === 'Codechef') {
      p = 'C'
    } else if (plat === 'Atcoder') {
      p = 'A'
    } else if (plat === 'UVA') {
      p = 'U'
    } else if (plat === 'SPOJ') {
      p = 'S'
    }

    const ans = [
      {
        prob_id: id,
        platform: p,
      },
    ]

    const res = deleteProblem(ans)
    alert('Problem Deleted')
    window.location.reload()
  }

  //page states
  const [first, setFirst] = useState(1)
  const [last, setLast] = useState(1)
  const [prev, setPrev] = useState(1)
  const [next, setNext] = useState(1)
  const [page, setPage] = useState(1)
  const [loader, setLoader] = useState(false)
  const [curPage, setCurPage] = useState(1)
  const [showPagi, setShowPagi] = useState(false)
  useEffect(async () => {
    const url = `https://143.110.253.225/lists/userlist/edit/${props.slug}?page=${page}`
    await getThisUserlist(creds.access, url)
      .then((res) => {
        setPlaylist(res)

        res.link.first != null
          ? setFirst(parseInt(res.link.first.split('=')[1]))
          : setFirst(1)
        res.link.last != null
          ? setLast(parseInt(res.link.last.split('page')[1]))
          : setLast(1)
        res.link.prev != null
          ? setPrev(parseInt(res.link.prev.split('=')[1]))
          : setPrev(null)
        res.link.next != null
          ? setNext(parseInt(res.link.next.split('=')[1]))
          : setNext(null)
        res.result.length > 0 ? setShowPagi(true) : setShowPagi(false)
      })
      .catch((error) => setErrors(true))
  }, [page])
  if (last != null) {
    for (let i = 1; i <= last; i++) {
      pageNumbers.push(i)
    }
    //console.log(pageNumbers)
    //console.log("last:"+last);
  }

  return (
    <>
      <Navbar />
      <h3
        style={{
          textAlign: 'center',
          marginTop: '150px',
        }}
      >
        {props.name}
      </h3>

      <p
        style={{
          fontSize: '15px',
          textAlign: 'center',
          marginTop: '30px',
          marginBottom: '40px',
        }}
      >
        This is a personalized problem list made by you. All the best and keep
        coding!
      </p>
      <button
        onClick={deletePlaylist}
        style={{
          position: 'absolute',
          left: '86%',
          top: '100px',
          backgroundColor: 'darkred',
          borderRadius: '15px',
          color: 'white',
          outline: 'none',
          border: '0px',
          padding: '13px',
          fontSize: '15px',
        }}
      >
        Delete Problem List
      </button>
      {!playlist.result ? (
        <Loading />
      ) : (
        <>
          <div
            style={{
              margin: '0px',
              padding: '0px',
              marginLeft: '100px',
              marginRight: '100px',
              marginBottom: '100px',
            }}
          >
            <div className="row">
              {playlist.result.map((playlist, i) => {
                return (
                  <>
                    <ul
                      className="list list-inline"
                      style={{ marginTop: '-14px' }}
                    >
                      <li className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <div className="ml-2">
                            <h5 className="mb-0 link_ques">
                              {i + 1}.{' '}
                              <a href={playlist.url} className="link_ques">
                                {playlist.name}
                              </a>
                            </h5>
                            <div className="d-flex flex-row mt-1 text-black-50 date-time">
                              <div>
                                <span className="ml-3 black">
                                  Platform: {playlist.platform},
                                </span>
                              </div>
                              <div>
                                <span className="ml-2 black">
                                  Tags: {playlist.tags},
                                </span>
                              </div>
                              <div>
                                <span className="ml-2 black">
                                  Difficulty: {playlist.difficulty},
                                </span>
                              </div>
                              <div>
                                <span className="ml-2 black">
                                  Rating: {playlist.rating}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-around">
                          {playlist.solved ? (
                            <>
                              <a
                                href={playlist.url}
                                target="_blank"
                                style={{
                                  color: 'white',
                                  backgroundColor: 'green',
                                  borderRadius: '15px',
                                  width: '100px',
                                  marginRight: '30px',
                                  outline: 'none',
                                  textAlign: 'center',
                                  paddingTop: '10px',
                                  textDecoration: 'none',
                                  fontSize: '15px',
                                  opacity: '0.7',
                                }}
                              >
                                Solved
                              </a>
                            </>
                          ) : (
                            <>
                              <a
                                href={playlist.url}
                                target="_blank"
                                style={{
                                  color: 'white',
                                  backgroundColor: 'blue',
                                  borderRadius: '15px',
                                  width: '100px',
                                  marginRight: '30px',
                                  outline: 'none',
                                  textAlign: 'center',
                                  paddingTop: '10px',
                                  textDecoration: 'none',
                                  fontSize: '15px',
                                  opacity: '0.9',
                                }}
                              >
                                Solve
                              </a>
                            </>
                          )}
                          <a
                            onClick={() =>
                              deleteProb(playlist.prob_id, playlist.platform)
                            }
                            style={{
                              color: 'white',
                              backgroundColor: 'blue',
                              borderRadius: '15px',
                              width: '50%',
                              marginRight: '50px',
                              outline: 'none',
                              textAlign: 'center',
                              paddingTop: '10px',
                              textDecoration: 'none',
                              fontSize: '15px',
                              opacity: '0.9',
                              cursor: 'pointer',
                            }}
                          >
                            Remove
                          </a>
                        </div>
                      </li>
                    </ul>
                  </>
                )
              })}
            </div>
            {showPagi ? (
              <div className="paginate">
                <nav className="paginator">
                  <ul className="pagination">
                    {page != 1 ? (
                      <a
                        style={{ padding: '15px' }}
                        onClick={() => {
                          setPage(1)
                          setTimeout(() => {
                            setLoader(true)
                          }, 1000)
                        }}
                        className="page-link"
                      >
                        First
                      </a>
                    ) : (
                      <></>
                    )}
                    {page != 1 ? (
                      <a
                        style={{ padding: '15px' }}
                        onClick={() => {
                          setTimeout(() => {
                            setLoader(true)
                          }, 1000)

                          setPage(prev)
                        }}
                        className="page-link"
                      >{`<`}</a>
                    ) : (
                      <></>
                    )}

                    {pageNumbers.map((number) => (
                      <li key={number} className="page-item">
                        <a
                          style={{ padding: '15px' }}
                          onClick={() => {
                            setTimeout(() => {
                              setLoader(true)
                            }, 1000)
                            setPage(number)
                            setTimeout(100)
                            setCurPage(number)
                          }}
                          className={`${
                            page == number ? `active-page` : 'page-link'
                          }`}
                        >
                          {number}
                        </a>
                      </li>
                    ))}
                    {page != last ? (
                      <a
                        style={{ padding: '15px' }}
                        onClick={() => {
                          setTimeout(() => {
                            setLoader(true)
                          }, 1000)
                          setPage(next)
                          setCurPage(next)
                        }}
                        className="page-link"
                      >{`>`}</a>
                    ) : (
                      <></>
                    )}
                    {page != last ? (
                      <a
                        style={{ padding: '15px' }}
                        onClick={() => {
                          setTimeout(() => {
                            setLoader(true)
                          }, 1000)
                          setPage(last)
                          setCurPage(last)
                        }}
                        className="page-link"
                      >
                        Last
                      </a>
                    ) : (
                      <></>
                    )}
                  </ul>
                </nav>
              </div>
            ) : (
              <></>
            )}
          </div>

          <FooterSmall />
        </>
      )}
    </>
  )
}

export default PlaylistList
