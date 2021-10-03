import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import './profile.style.css'

import CarouselSlide from './CarouselSlide'
import LoadingProfile from '../../components/profile/Loading'
import Navbar from '../../components/Header/Navbar'

import FooterSmall from '../../components/Footer/FooterSmall'
import Loading from '../logreg/loading'

import CodeforcesLongImg from '../../assets/codeforces.png'
import CodechefLongImg from '../../assets/upsolve/codechef_logo.png'

import SpojLongImg from '../../assets/spoj.png'
import UVAImg from '../../assets/uva_online_judge.png'
import AtcoderImg from '../../assets/atcoder.png'

import { useLocalStorage } from '../../hooks/useLocalStorage'

import { Carousel } from 'react-bootstrap'
import {
  getProfile,
  getInfoBySite,
  getFriendReq,
} from '../../actions/profile.actions'
import UserInfoCard from './UserInfoCard'

const tabs1 = ['#tab1-1', '#tab1-2', '#tab1-3']
const tabs2 = ['#tab2-1', '#tab2-2', '#tab2-3']
const tabs3 = ['#tab3-1', '#tab3-2', '#tab3-3']
const tabSection1 = ['tab1-1', 'tab1-2', 'tab1-3']
const tabSection2 = ['tab2-1', 'tab2-2', 'tab2-3']
const tabSection3 = ['tab3-1', 'tab3-2', 'tab3-3']

let platformsData = []

function ProfilePage({ handle: uu }) {
  const [error, setErrors] = useState(false)
  const [firstTime, setFirstTime] = useState()
  const [show, setShow] = useState(true)

  const [platformData, setPlatformData] = useState({
    codforces: {},
    codechef: {},
    atcoder: {},
    spoj: {},
    uva: {},
  })

  const [platformStatus, setPlatformStatus] = useState({
    codforces: true,
    codechef: true,
    atcoder: true,
    spoj: true,
    uva: true,
  })

  const [codeforcesDat, setCodeforcesDat] = useState({})
  const [codechefDat, setCodechefDat] = useState({})
  const [atcoderDat, setAtcodercesDat] = useState({})
  const [spojDat, setSpojDat] = useState({})
  const [uvaDat, setUvaDat] = useState({})

  const [codeforcesStatus, setCodeforcesStatus] = useState(true)
  const [codechefStatus, setCodechefStatus] = useState(true)
  const [atcoderStatus, setAtcodercesStatus] = useState(true)
  const [spojStatus, setSpojStatus] = useState(true)
  const [uvaStatus, setUvaStatus] = useState(true)

  const [creds, setCreds] = useLocalStorage('creds')

  // useEffect(() => {
  //   $(function () {
  //     // Reference the tab links.
  //     const tabLinks = $('#tab1-links li a')
  //     // console.log("PP");
  //     // Handle link clicks.
  //     tabLinks.click(function (event) {
  //       var $this = $(this)

  //       // Prevent default click behaviour.
  //       event.preventDefault()

  //       // Remove the active class from the active link and section.
  //       $('#tab1-links a.active1, section.active1').removeClass('active1')

  //       // Add the active class to the current link and corresponding section.
  //       $this.addClass('active1')
  //       $($this.attr('href')).addClass('active1')
  //     })
  //   })

  //   $(window).scroll(function () {
  //     if ($(window).scrollTop() <= 800) {
  //       $('#profileCard').css({
  //         'margin-top': $(window).scrollTop() + 'px',
  //         'margin-left': $(window).scrollLeft() + 'px',
  //       })
  //     }
  //   })
  // })

  // useEffect(() => {
  //   $(function () {
  //     // Reference the tab links.
  //     const tabLinks = $('#tab2-links li a')
  //     // console.log("PP");
  //     // Handle link clicks.
  //     tabLinks.click(function (event) {
  //       var $this = $(this)

  //       // Prevent default click behaviour.
  //       event.preventDefault()

  //       // Remove the active class from the active link and section.
  //       $('#tab2-links a.active2, section.active2').removeClass('active2')

  //       // Add the active class to the current link and corresponding section.
  //       $this.addClass('active2')
  //       $($this.attr('href')).addClass('active2')
  //     })
  //   })

  //   $(window).scroll(function () {
  //     if ($(window).scrollTop() <= 800) {
  //       $('#profileCard').css({
  //         'margin-top': $(window).scrollTop() + 'px',
  //         'margin-left': $(window).scrollLeft() + 'px',
  //       })
  //     }
  //   })
  // })

  // useEffect(() => {
  //   $(function () {
  //     // Reference the tab links.
  //     const tabLinks = $('#tab3-links li a')
  //     // console.log("PP");
  //     // Handle link clicks.
  //     tabLinks.click(function (event) {
  //       var $this = $(this)

  //       // Prevent default click behaviour.
  //       event.preventDefault()

  //       // Remove the active class from the active link and section.
  //       $('#tab3-links a.active3, section.active3').removeClass('active3')

  //       // Add the active class to the current link and corresponding section.
  //       // $this.addClass('active3');
  //       $($this.attr('href')).addClass('active3')
  //     })
  //   })

  //   //   $(window).scroll(function(){
  //   //     if($(window).scrollTop() <=800)
  //   //     {
  //   //         $("#profileCard").css({"margin-top": ($(window).scrollTop()) + "px", "margin-left":($(window).scrollLeft()) + "px"});
  //   //     }

  //   //   });
  // })

  useEffect(() => {
    if (creds) {
      setFirstTime(creds.first)
    }

    // jQuery.

    async function fetchData() {
      if (creds) {
        const res = await getProfile(creds.access, uu)
          .then((show) => setShow(false))
          .catch((error) => setErrors(true))
      } else {
        alert('Please Login to Proceed')
        window.location = '/login'
      }

      const res1 = await getInfoBySite(uu, 'codeforces')
        .then((res) => setCodeforcesDat(res))
        .then((show) => setCodeforcesStatus(false))
        .catch((error) => setErrors(true))

      const res2 = await getInfoBySite(uu, 'codechef')
        .then((res) => setCodechefDat(res))
        .then((show) => setCodechefStatus(false))
        .catch((error) => setErrors(true))

      const res3 = await getInfoBySite(uu, 'atcoder')
        .then((res) => setAtcodercesDat(res))
        .then((show) => setAtcodercesStatus(false))
        .catch((error) => setErrors(true))

      const res4 = await getInfoBySite(uu, 'spoj')
        .then((res) => setSpojDat(res))
        .then((show) => setSpojStatus(false))
        .catch((error) => setErrors(true))

      const res5 = await getInfoBySite(uu, 'uva')
        .then((res) => setUvaDat(res))
        .then((show) => setUvaStatus(false))
        .catch((error) => setErrors(true))

      if (creds) {
        const res6 = await getFriendReq(creds.access)
          .then((res6) => setFriendReq(res6))
          .then(() => {
            setFriendReqStatus(true)
          })
      } else {
        alert('Please Login to Proceed')
        window.location = '/login'
      }
    }
    fetchData()
    // console.log(friendReq);
  }, [])

  return firstTime === true ? (
    (window.location = '/createProfile')
  ) : show == false ? (
    <Loading />
  ) : (
    <>
      <Navbar />

      <div className="container" style={{ marginTop: '100px' }}>
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <UserInfoCard uu={uu} />
            </div>

            {/* Platform Cards Starts */}

            <div className="col-md-8">
              <div className="card1 mb-3">
                <div className="card-body" style={{ color: 'black' }}>
                  <div>
                    <span>
                      <img
                        style={{
                          height: '1rem',
                          width: '6rem',
                          marginRight: 'auto',
                          marginLeft: 'auto',
                          display: 'block',
                        }}
                        src={CodeforcesLongImg}
                      ></img>
                    </span>
                  </div>
                  {/* {console.log(codeforcesDat)} */}
                  {codeforcesStatus === true ? (
                    <LoadingProfile />
                  ) : (
                    <div>
                      <div style={{ marginTop: '20px' }}>
                        <div>
                          Current Rating : {codeforcesDat.result.rating}
                        </div>
                        <div>Max Rating : {codeforcesDat.result.maxRating}</div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginTop: '10px',
                          justifyContent: 'space-around',
                        }}
                      >
                        <div
                          style={{ marginRight: '40px', marginLeft: '20px' }}
                        >
                          <Carousel controls={false} indicators={false}>
                            <CarouselSlide caption="Organization Rank">
                              {codeforcesDat.result.organizationRank
                                ? codeforcesDat.result.organizationRank
                                : '12023'}
                            </CarouselSlide>
                            <CarouselSlide caption="Country Rank">
                              {codeforcesDat.result.countryRank
                                ? codeforcesDat.result.countryRank
                                : 'NA'}
                            </CarouselSlide>
                            <CarouselSlide caption="Country Rank">
                              {codeforcesDat.result.worldRank}
                            </CarouselSlide>
                          </Carousel>
                        </div>
                        <div
                          className="tabs1"
                          style={{
                            minWidth: '428px',
                            minHeight: '198px',
                            maxWidth: '428px',
                            maxHeight: '198px',
                            paddingTop: '12px',
                          }}
                        >
                          {codeforcesDat.result.contestRank.length === 0 ? (
                            <h6 style={{ color: 'black', fontSize: '2rem' }}>
                              You havent participated in any contest
                            </h6>
                          ) : (
                            <>
                              <h1>hello world</h1>
                              {/* <ul
                                id="tab1-links"
                                style={{ marginBottom: '0', height: '160px' }}
                              >
                                {codeforcesDat.result.contestRank.map(
                                  (contestDat, index) => {
                                    return (
                                      <li key={index}>
                                        <a
                                          href={tabs1[index]}
                                          className={
                                            index === 0 ? 'active1' : ''
                                          }
                                        >
                                          {index + 1}
                                        </a>
                                      </li>
                                    )
                                  }
                                )}
                              </ul>
                              {codeforcesDat.result.contestRank.map(
                                (contestDat, index) => {
                                  return (
                                    <section
                                      style={{ width: '100%', height: '160px' }}
                                      id={tabSection1[index]}
                                      key={index}
                                      className={index === 0 ? 'active1' : ''}
                                    >
                                      <h6
                                        style={{
                                          color: 'black',
                                          fontSize: '18px',
                                          fontWeight: '700',
                                          color: 'black',
                                          textDecoration: 'underline',
                                        }}
                                      >
                                        {contestDat.contest.name.slice(0, 40)}
                                      </h6>
                                      <p
                                        style={{
                                          fontSize: '14px',
                                          fontWeight: '500',
                                        }}
                                      >
                                        World Rank :{' '}
                                        {contestDat.worldRank
                                          ? contestDat.worldRank
                                          : 'NA'}
                                      </p>
                                      <p
                                        style={{
                                          fontSize: '14px',
                                          fontWeight: '500',
                                        }}
                                      >
                                        Country Rank :{' '}
                                        {contestDat.countryRank
                                          ? contestDat.countryRank
                                          : 'NA'}
                                      </p>
                                      <p
                                        style={{
                                          fontSize: '14px',
                                          fontWeight: '500',
                                        }}
                                      >
                                        Org Rank :{' '}
                                        {contestDat.organizationRank
                                          ? contestDat.organizationRank
                                          : 'NA'}
                                      </p>
                                    </section>
                                  )
                                }
                              )}{' '} */}
                            </>
                          )}
                        </div>
                      </div>{' '}
                    </div>
                  )}
                  {/* <hr width="100%" className="mt-4" style={{height: '5px', color: 'black', opacity: '1'}}/> */}
                </div>
              </div>
              <div className="card1 mb-3">
                <div className="card-body" style={{ color: 'black' }}>
                  {/* {console.log(codeforcesDat)} */}
                  {/* <hr width="100%" className="mt-4" style={{height: '5px', color: 'black', opacity: '1'}}/> */}

                  {/* Codechef card starts */}

                  {codechefStatus === true ? (
                    <LoadingProfile />
                  ) : codechefDat.status === 'FAILED' ? (
                    <></>
                  ) : (
                    <div>
                      <div>
                        <span>
                          <img
                            style={{
                              height: '3rem',
                              width: '6rem',
                              marginRight: 'auto',
                              marginLeft: 'auto',
                              display: 'block',
                            }}
                            src={CodechefLongImg}
                          ></img>
                        </span>
                      </div>
                      <div style={{ marginTop: '20px' }}>
                        <div>Current Rating : {codechefDat.result.rating}</div>
                        <div>Max Rating : {codechefDat.result.maxRating}</div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginTop: '10px',
                          justifyContent: 'space-around',
                        }}
                      >
                        <div
                          style={{ marginRight: '40px', marginLeft: '20px' }}
                        >
                          <Carousel controls={false} indicators={false}>
                            <CarouselSlide caption="Country Rank">
                              {codechefDat.result.countryRank
                                ? codechefDat.result.countryRank
                                : 'NA'}
                            </CarouselSlide>
                            <CarouselSlide caption="World Rank">
                              {codechefDat.result.worldRank}
                            </CarouselSlide>
                          </Carousel>
                        </div>
                        <div
                          className="tabs2"
                          style={{
                            minWidth: '428px',
                            minHeight: '198px',
                            maxWidth: '428px',
                            maxHeight: '198px',
                            paddingTop: '12px',
                          }}
                        >
                          {codechefDat.result.contestRank.length === 0 ? (
                            <h6 style={{ color: 'black', fontSize: '2rem' }}>
                              You havent participated in any contest
                            </h6>
                          ) : (
                            <>
                              <ul
                                id="tab2-links"
                                style={{ marginBottom: '0', height: '160px' }}
                              >
                                {codechefDat.result.contestRank.map(
                                  (_, index) => {
                                    return (
                                      <li key={index}>
                                        <a
                                          href={tabs2[index]}
                                          className={
                                            index === 0 ? 'active2' : ''
                                          }
                                        >
                                          {index + 1}
                                        </a>
                                      </li>
                                    )
                                  }
                                )}
                              </ul>
                              {codechefDat.result.contestRank.map(
                                (contestDat, index) => {
                                  return (
                                    <section
                                      style={{ width: '100%', height: '160px' }}
                                      id={tabSection2[index]}
                                      key={index}
                                      className={index === 0 ? 'active2' : ''}
                                    >
                                      <h6
                                        style={{
                                          color: 'black',
                                          fontSize: '18px',
                                          fontWeight: '700',
                                          color: 'black',
                                          textDecoration: 'underline',
                                        }}
                                      >
                                        {contestDat.name.slice(0, 40)}
                                      </h6>
                                      <p
                                        style={{
                                          marginTop: '20px',
                                          fontSize: '16px',
                                          fontWeight: '500',
                                        }}
                                      >
                                        Rank : {contestDat.rank}
                                      </p>
                                    </section>
                                  )
                                }
                              )}{' '}
                            </>
                          )}
                        </div>
                      </div>

                      {/* <hr width="100%" className="mt-4" style={{height: '5px', color: 'black', opacity: '1'}}/> */}
                    </div>
                  )}
                </div>
              </div>
              {/* {console.log(codeforcesDat)} */}
              {/* <hr width="100%" className="mt-4" style={{height: '5px', color: 'black', opacity: '1'}}/> */}

              {/* Codechef card starts */}

              {/* Atcoder Card Starts */}

              {/* {console.log(atcoderDat)} */}

              {atcoderStatus === true ? (
                <>
                  <div className="card1 mb-3">
                    <div className="card-body" style={{ color: 'black' }}>
                      <LoadingProfile />
                    </div>
                  </div>
                </>
              ) : atcoderDat.status === 'FAILED' ? (
                <></>
              ) : (
                <div className="card1 mb-3">
                  <div className="card-body" style={{ color: 'black' }}>
                    <div>
                      <div>
                        <span>
                          <img
                            style={{
                              height: '3rem',
                              width: '3rem',
                              marginRight: 'auto',
                              marginLeft: 'auto',
                              display: 'block',
                              marginBottom: '0px',
                            }}
                            src={AtcoderImg}
                          ></img>
                        </span>
                      </div>
                      <div style={{ marginTop: '20px' }}>
                        <div>Rating : {atcoderDat.result.rating}</div>
                        <div>Max Rating : {atcoderDat.result.maxRating}</div>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginTop: '10px',
                          justifyContent: 'space-around',
                        }}
                      >
                        <div
                          style={{ marginRight: '40px', marginLeft: '20px' }}
                        >
                          <Carousel controls={false} indicators={false}>
                            <CarouselSlide caption="World Rank">
                              {atcoderDat.result.worldRank
                                ? atcoderDat.result.worldRank
                                : 'NA'}
                            </CarouselSlide>
                          </Carousel>
                        </div>
                        <div
                          className="tabs3"
                          style={{
                            minWidth: '428px',
                            minHeight: '198px',
                            maxWidth: '428px',
                            maxHeight: '198px',
                            paddingTop: '12px',
                          }}
                        >
                          {atcoderDat.result.contestRank.length === 0 ? (
                            <h6 style={{ color: 'black', fontSize: '2rem' }}>
                              You havent participated in any contest
                            </h6>
                          ) : (
                            <>
                              <ul
                                id="tab3-links"
                                style={{ marginBottom: '0', height: '160px' }}
                              >
                                {atcoderDat.result.contestRank.map(
                                  (contestDat, index) => {
                                    return (
                                      <li key={index}>
                                        <a
                                          href={tabs3[index]}
                                          className={
                                            index === 0 ? 'active3' : ''
                                          }
                                        >
                                          {index + 1}
                                        </a>
                                      </li>
                                    )
                                  }
                                )}
                              </ul>
                              {atcoderDat.result.contestRank.map(
                                (contestDat, index) => {
                                  return (
                                    <section
                                      style={{ width: '100%', height: '160px' }}
                                      id={tabSection3[index]}
                                      key={index}
                                      className={index === 0 ? 'active3' : ''}
                                    >
                                      <h6
                                        style={{
                                          color: 'black',
                                          fontSize: '18px',
                                          fontWeight: '700',
                                          color: 'black',
                                          textDecoration: 'underline',
                                        }}
                                      >
                                        {contestDat.name.slice(0, 40)}
                                      </h6>
                                      <p
                                        style={{
                                          marginTop: '20px',
                                          fontSize: '16px',
                                          fontWeight: '500',
                                        }}
                                      >
                                        World Rank : {contestDat.worldRank}
                                      </p>
                                    </section>
                                  )
                                }
                              )}{' '}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <hr width="100%" className="mt-4" style={{height: '5px', color: 'black', opacity: '1'}}/> */}
                </div>
              )}
              <div className="card1 mb-3">
                <div
                  className="card-body"
                  style={{ color: 'black', padding: '0', minHeight: '0' }}
                >
                  {/* {console.log(codeforcesDat)} */}

                  <div className="row">
                    {/* SPOJ Card Starts */}
                    <div className="col-md-6 border-right">
                      {/* {console.log(spojDat)} */}
                      {spojStatus === true ? (
                        <div className="card1 mb-3">
                          <div className="card-body" style={{ color: 'black' }}>
                            <LoadingProfile />
                          </div>
                        </div>
                      ) : spojDat.status === 'FAILED' ? (
                        <></>
                      ) : (
                        <div>
                          <div>
                            <span>
                              <img
                                style={{
                                  height: '1rem',
                                  width: '6rem',
                                  marginRight: 'auto',
                                  marginLeft: 'auto',
                                  display: 'block',
                                  marginBottom: '0px',
                                }}
                                src={SpojLongImg}
                              ></img>
                            </span>
                          </div>
                          <div style={{ marginTop: '20px' }}>
                            <div>Points : {spojDat.result.points}</div>
                            <div>Solved : {spojDat.result.solvedCount}</div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              marginTop: '10px',
                              justifyContent: 'space-around',
                            }}
                          >
                            <div
                              style={{
                                marginRight: '40px',
                                marginLeft: '20px',
                              }}
                            >
                              <Carousel controls={false} indicators={false}>
                                <CarouselSlide
                                  caption="World Rank"
                                  type="small"
                                >
                                  {spojDat.result.worldRank
                                    ? spojDat.result.worldRank
                                    : 'NA'}
                                </CarouselSlide>
                              </Carousel>
                            </div>
                          </div>{' '}
                        </div>
                      )}
                    </div>

                    {/* UVA Card Starts */}
                    <div className="col-md-6">
                      {/* {console.log(spojDat)} */}
                      {uvaStatus === true ? (
                        <LoadingProfile />
                      ) : uvaDat.status === 'FAILED' ? (
                        <></>
                      ) : (
                        <div>
                          <div>
                            <span>
                              <img
                                style={{
                                  height: '2rem',
                                  width: '2rem',
                                  marginRight: 'auto',
                                  marginLeft: 'auto',
                                  display: 'block',
                                  marginBottom: '0px',
                                }}
                                src={UVAImg}
                              ></img>
                            </span>
                          </div>
                          <div style={{ marginTop: '20px' }}>
                            <div>Solved : {uvaDat.result.solvedCount}</div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              marginTop: '10px',
                              justifyContent: 'space-around',
                            }}
                          >
                            <div
                              style={{
                                marginRight: '40px',
                                marginLeft: '20px',
                              }}
                            >
                              <Carousel controls={false} indicators={false}>
                                <CarouselSlide
                                  caption="World Rank"
                                  type="small"
                                >
                                  {uvaDat.result.worldRank
                                    ? uvaDat.result.worldRank
                                    : 'NA'}
                                </CarouselSlide>
                              </Carousel>
                            </div>
                          </div>{' '}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSmall />
    </>
  )
}

export default ProfilePage
