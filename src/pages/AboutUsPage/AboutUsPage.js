import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import Navbar from '../../components/Header/Navbar'
import FooterSmall from '../../components/Footer/FooterSmall'

function AboutUsPage() {
  return (
    <>
      <Navbar />

      <Row
        style={{ marginRight: '0', marginLeft: '0', paddingTop: '5.5rem' }}
        className="bigRow"
      >
        <Col className="heading1" lg={12} md={12} sm={12}>
          <h1 style={{ textAlign: 'center', color: 'white' }}>ABOUT US</h1>
        </Col>
      </Row>

      <Row style={{ marginRight: '0', marginLeft: '0' }} className="bigRow">
        <Col className="first heading1" lg={12} md={12} sm={12}>
          <div className="aboutUsContent" style={{ padding: '0 2rem' }}>
            Codeddiger is a platform to analyze and improve your Competitive
            Programming Progress. It is a place where a user can find a variety
            of problems from competitive sites including Codechef, Codeforces,
            Atcoder, Spoj, and Uva online judge and can start their way to
            Competitive programming.
          </div>
        </Col>
      </Row>

      <Row style={{ marginRight: '0', marginLeft: '0' }} className="bigRow">
        <Col lg={12} md={12} sm={12}>
          <section id="counter" class="counter">
            <div class="main_counter_area">
              <div class="p-y-3">
                <div class="container">
                  <div class="row">
                    <div
                      style={{ display: 'flex' }}
                      class="main_counter_content text-center white-text wow fadeInUp"
                    >
                      <div class="col-md-4">
                        <div class="single_counter p-y-2 m-t-1">
                          {' '}
                          <i
                            style={{ fontSize: '3rem' }}
                            class="fa fa-briefcase m-b-1"
                          ></i>
                          <h2 class="statistic-counter">
                            <CountUp
                              start={0}
                              end={100}
                              duration={3}
                              redraw={true}
                            >
                              {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                  <h2 ref={countUpRef} />
                                </VisibilitySensor>
                              )}
                            </CountUp>
                          </h2>{' '}
                          <span></span>
                          <p>Success Stories of Students</p>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="single_counter p-y-2 m-t-1">
                          {' '}
                          <i
                            style={{ fontSize: '3rem' }}
                            class="fa fa-check m-b-1"
                          ></i>
                          <h2 class="statistic-counter">
                            <CountUp start={0} end={1000} duration={3}>
                              {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                  <h2 ref={countUpRef} />
                                </VisibilitySensor>
                              )}
                            </CountUp>
                          </h2>
                          <p>Problems Solved</p>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="single_counter p-y-2 m-t-1">
                          {' '}
                          <i
                            style={{ fontSize: '3rem' }}
                            class="fa fa-coffee m-b-1"
                          ></i>
                          <h2 class="statistic-counter">
                            <CountUp
                              start={0}
                              end={500}
                              duration={3}
                              redraw={true}
                            >
                              {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                  <h2 ref={countUpRef} />
                                </VisibilitySensor>
                              )}
                            </CountUp>
                          </h2>
                          <p>Registered Users</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Col>
      </Row>
      <FooterSmall />
    </>
  )
}

export default AboutUsPage
