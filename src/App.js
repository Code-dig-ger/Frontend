import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  state,
  Link,
  Redirect,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-slider/dist/css/bootstrap-slider.css'
import './bootstrap-theme/bootstrap.min.cyborg.css'
import Container from 'react-bootstrap/Container'
import Homepage from './pages/homepage/homepage.page'
import LogReg from './pages/logreg/LogReg'
import Codeforces from './pages/upsolve/Codeforces'
import Codechef from './pages/upsolve/Codechef'
import Atcoder from './pages/upsolve/Atcoder'
import LaddersLevel from './pages/ladders/LaddersLevel'
import Profile from './pages/profile/ProfilePage'
import Info from './components/profile/FillInfo'
import '../node_modules/aos/dist/aos.css'
import '../node_modules/react-multi-carousel/lib/styles.css'
import './App.css'
import LaddersQuestionPage from './pages/ladders/LaddersQuestionPage'
import NewpassEmail from './pages/logreg/ForgotPass'
import NewPassSet from './pages/logreg/NewPassword'
import MyPlaylists from './pages/MyPlaylists/MyPlaylists'
import PlaylistList from './pages/MyPlaylists/PlaylistList'
import ProblemsPage from './pages/problemsPage/ProblemsPage.js'
import queryString from 'query-string'
import changePassForm from './components/logreg/changePassword'
import EmailVerfiedMsg from './components/logreg/EmailVerifiedMsgPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import UpdateProfile from './components/profile/UpdateProfile'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'
import PrivacyPolicy from './pages/ExtraInfoPages/PrivacyPolicy'
import TermsAndConditions from './pages/ExtraInfoPages/TermsAndConditions'
import ContestPage from './pages/contestsPage/ContestPage'

//react context
export const CredentialsContext = React.createContext()

const App = () => {
  //  setInterval(Validate,300*1000);
  const playlists = ({ match }) => {
    return (
      //passing handle as prop
      <MyPlaylists handle={match.params.id} />
    )
  }
  const PlaylistList1 = ({ match }) => {
    return (
      //passing slug and handle as props
      <PlaylistList slug={match.params.slug} handle={match.params.id} />
    )
  }

  const profile = ({ match }) => {
    return (
      //passing handle as prop
      <Profile handle={match.params.id} />
    )
  }

  const LaddersQuestionPage1 = ({ match, location }) => {
    const [type1, setType1] = useState(
      match.params.type === 'practice' ? 'list' : 'ladder'
    )
    const [pageNo, setPageNo] = useState(
      location.search === '' ? '' : location.search
    )
    return (
      // PARSEINT IS A JS FUNCTION WHICH WILL CONVERT THE THE GIVEN STRING OF NUMBERS
      // ACCORDING TO THE BASE OR RADIX SPECIFIED
      <LaddersQuestionPage
        wise={match.params.wise}
        type={type1}
        slug={match.params.slug}
        pageNo={pageNo}
      />
    )
  }

  const LaddersLevel1 = ({ match }) => {
    const [type1, setType1] = useState(
      match.params.type === 'practice' ? 'list' : 'ladder'
    )
    return (
      // PARSEINT IS A JS FUNCTION WHICH WILL CONVERT THE THE GIVEN STRING OF NUMBERS
      // ACCORDING TO THE BASE OR RADIX SPECIFIED
      <LaddersLevel wise={match.params.wise} type={type1} />
    )
  }

  const ContestPage1 = ({ match, location }) => {
    return (
      //location.search is the part of url after ? symbol
      <ContestPage queryStr={location.search} />
    )
  }

  const ProblemsPage1 = ({ match, location }) => {
    // console.log(location.search);
    const info = queryString.parse(location.search)
    // console.log(JSON.stringify(match.params));
    return <ProblemsPage filters={info} queryStr={location.search} />
  }

  const [creds, setCreds] = useState({})
  return (
    <>
      <Container fluid style={{ paddingBottom: '0', paddingTop: '0' }}>
        <CredentialsContext.Provider value={{ creds, setCreds }}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/list/:id" component={playlists} />{' '}
              {/* All Playlists - id is username */}
              <Route
                exact
                path="/list/:id/:slug"
                component={PlaylistList1}
              />{' '}
              {/* Questions in a Particular playlist - slug is of that problem-list */}
              <Route exact path="/login" component={LogReg} />{' '}
              {/* Login/Registration */}
              <Route
                exact
                path="/upsolve/codeforces"
                component={Codeforces}
              />{' '}
              {/* Codeforces upsolve */}
              <Route exact path="/upsolve/atcoder" component={Atcoder} />{' '}
              {/* Atcoder Upsolve */}
              <Route exact path="/upsolve/codechef" component={Codechef} />{' '}
              {/* Codechef upsolve */}
              <Route exact path="/" component={Homepage} /> {/* Homepage */}
              <Route exact path="/profile/:id" component={profile} />{' '}
              {/* Profile, id - username */}
              <Route exact path="/:wise/:type" component={LaddersLevel1} />{' '}
              {/* wise - topic,level | type - ladder,practice */}
              <Route
                exact
                path="/:wise/:type/:slug"
                component={LaddersQuestionPage1}
              />{' '}
              {/* wise - topic,level | type - ladder,practice | slug is selected series */}
              <Route exact path="/problems" component={ProblemsPage1} />{' '}
              {/* Problems page */}
              <Route
                exact
                path="/change_password_request"
                component={changePassForm}
              />{' '}
              {/* request to change [assowrd] */}
              <Route
                exact
                path="/email-verified"
                component={EmailVerfiedMsg}
              ></Route>
              <Route exact path="/home" component={Homepage} /> {/* Homepage */}
              <Route exact path="/createProfile" component={Info} />{' '}
              {/* Creating profile for first time login */}
              <Route exact path="/forgPass" component={NewpassEmail} />{' '}
              {/* Forgot password - email form */}
              <Route exact path="/aboutus" component={AboutUsPage} />
              <Route exact path="/setNewPass" component={NewPassSet} />{' '}
              {/* Form to set new password */}
              <Route exact path="/error" component={ErrorPage} />
              <Route
                exact
                path="/updateProfile"
                component={UpdateProfile}
              />{' '}
              {/* Form to update prpfile */}
              <Route exact path="/privacy" component={PrivacyPolicy} />
              <Route exact path="/terms" component={TermsAndConditions} />
              <Link
                to="/contests/?difficulty=diff&platforms=plats"
                component={ContestPage1}
              />{' '}
              {/* Contest page with filters */}
              <Link
                to="/problems/?difficulty=diff&platforms=plats"
                component={ProblemsPage1}
              />{' '}
              {/* Problem page with filters */}
              <Link
                to="/:wise/:type/:slug?page=pageNo"
                component={LaddersQuestionPage1}
              />
            </Switch>
            {/* <Route component={ErrorPage}/> */}
          </BrowserRouter>
        </CredentialsContext.Provider>
      </Container>
    </>
  )
}

export default App
