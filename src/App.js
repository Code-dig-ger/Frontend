import React ,{useState,useEffect} from "react";
import { BrowserRouter, Switch, Route, useParams, state, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./bootstrap-theme/bootstrap.min.cyborg.css";
import Container from "react-bootstrap/Container";
import Homepage from "./pages/homepage/homepage.page";
import LogReg from "./pages/logreg/LogReg";
import Codeforces from './pages/upsolve/Codeforces'
import Codechef from './pages/upsolve/Codechef'
import Atcoder from './pages/upsolve/Atcoder'
import LaddersLevel from "./pages/ladders/LaddersLevel";
import Profile from './pages/profile/ProfilePage'
import Virtual from './pages/upsolve/virtual.page'
import Info from './components/profile/FillInfo';
import '../node_modules/aos/dist/aos.css'
import '../node_modules/react-multi-carousel/lib/styles.css'
import "./App.css";
import LaddersQuestionPage from "./pages/ladders/LaddersQuestionPage";
import NewpassEmail from './pages/logreg/ForgotPass'
import NewPassSet from './pages/logreg/NewPassword'
import MyPlaylists from "./pages/MyPlaylists/MyPlaylists";
import PlaylistList from "./pages/MyPlaylists/PlaylistList";
import ProblemsPage from "./pages/problemsPage/ProblemsPage.js";
import queryString from 'query-string';


//react context
export const CredentialsContext=React.createContext();

const App = () => {
  
//  setInterval(Validate,300*1000);
  const playlists = ({match}) => {
    return(

      // PARSEINT IS A JS FUNCTION WHICH WILL CONVERT THE THE GIVEN STRING OF NUMBERS 
      // ACCORDING TO THE BASE OR RADIX SPECIFIED
      <MyPlaylists handle={match.params.id} />
    );
  }
  const PlaylistList1 = ({match}) => {
    return(

      // PARSEINT IS A JS FUNCTION WHICH WILL CONVERT THE THE GIVEN STRING OF NUMBERS 
      // ACCORDING TO THE BASE OR RADIX SPECIFIED
      <PlaylistList slug={match.params.slug} handle={match.params.id}/>
    );
  }

  const profile = ({match}) => {
    return(

      // PARSEINT IS A JS FUNCTION WHICH WILL CONVERT THE THE GIVEN STRING OF NUMBERS 
      // ACCORDING TO THE BASE OR RADIX SPECIFIED
      <Profile handle={match.params.id} />
    );
  }
  
  const LaddersQuestionPage1 = ({match,location}) => {
    console.log(location.search);
    console.log(JSON.stringify(match.params));
    const [type1, setType1] = useState(match.params.type === "practice" ? "list":"ladder");
    const [pageNo,setPageNo] = useState(location.search === "" ? "": location.search);
    return(

      // PARSEINT IS A JS FUNCTION WHICH WILL CONVERT THE THE GIVEN STRING OF NUMBERS 
      // ACCORDING TO THE BASE OR RADIX SPECIFIED
      <LaddersQuestionPage wise={match.params.wise} type={type1} slug={match.params.slug} pageNo={pageNo}/>
    );
  }

  const LaddersLevel1 = ({match}) => {
    const [type1, setType1] = useState(match.params.type === "practice" ? "list":"ladder");
    return(

      // PARSEINT IS A JS FUNCTION WHICH WILL CONVERT THE THE GIVEN STRING OF NUMBERS 
      // ACCORDING TO THE BASE OR RADIX SPECIFIED
      <LaddersLevel wise={match.params.wise} type={type1}/>
    );
  }

  const ProblemsPage1 = ({match,location}) => {
    console.log(location.search);
    const info=queryString.parse(location.search);
    console.log(info);
    console.log(JSON.stringify(match.params));
    return(
      <ProblemsPage filters={info} queryStr={location.search}/>
    );
  }


 const [creds,setCreds]=useState({});
  return (
    <>
      
      <Container fluid style={{paddingBottom:'0', paddingTop: '0'}}>
        <CredentialsContext.Provider value={{creds,setCreds}}>
        <BrowserRouter>
        
          <Switch>
            <Route exact path="/list/:id" component={playlists}/>
            <Route exact path="/list/:id/:slug" component={PlaylistList1}/>
             <Route exact path="/logreg" component={LogReg}/>
             <Route exact path="/upsolve/codeforces" component={Codeforces}/>  
             <Route exact path="/upsolve/atcoder" component={Atcoder}/>  
             <Route exact path="/upsolve/codechef" component={Codechef}/>  
             <Route exact path="/" component={Homepage}/>
             <Route exact path="/profile/:id" component={profile} />
             <Route exact path="/:wise/:type" component={LaddersLevel1}/>
            <Route exact path="/:wise/:type/:slug" component={LaddersQuestionPage1}/>
            <Route exact path="/:wise/:type/:slug?page=1" component={LaddersQuestionPage1}/>
            <Route exact path="/problems" component={ProblemsPage1}/>
             
             {/* <Route exact path="/laddersLevel/topic/page1" component={LaddersQuestionPage}/> */}
             
             <Route exact path="/upsolve/virtual" component={Virtual}/>
              
            <Route exact path="/home" component={Homepage}/>
            <Route exact path="/createProfile" component={Info}/>
            <Route exact path="/forgPass" component={NewpassEmail}/>
            
            <Route exact path="/setNewPass" component={NewPassSet}/>
            
            
            <Link to="/:wise/:type/:slug?page=pageNo" component={LaddersQuestionPage1}/>
            <Link to="/problems/?difficulty=diff&platforms=plats" component={ProblemsPage1}/>
            
            
             
          </Switch>
        </BrowserRouter>
        </CredentialsContext.Provider>
      </Container>
    </>
  );
};

export default App;
