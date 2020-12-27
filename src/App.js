// REACT
import React ,{useState} from "react";
import { BrowserRouter, Switch, Route, useParams, state } from "react-router-dom";
// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap-theme/bootstrap.min.cyborg.css";
import Container from "react-bootstrap/Container";

// COMPONENTS


// PAGES
import Homepage from "./pages/homepage/homepage.page";
import Problems from "./pages/problems.page";
import Upsolve from "./pages/upsolve/upsolve.page";
import LogReg from "./pages/logreg/LogReg";
import LaddersLevel from "./pages/ladders/LaddersLevel";
import LaddersTopic from "./pages/ladders/LaddersTopic";
import PracticeLevel from "./pages/practice/PracticeLevel";
import PracticeTopic from "./pages/practice/PracticeTopic"; 
import Particles from 'react-particles-js';
import Profile from './pages/profile/profile.page'
import Virtual from './pages/upsolve/virtual.page'



//aos 5 for home page only
import '../node_modules/aos/dist/aos.css'
import '../node_modules/react-multi-carousel/lib/styles.css'
// CSS
import "./App.css";
import LaddersQuestionPage from "./pages/ladders/LaddersQuestionPage";

//react context
export const CredentialsContext=React.createContext();

const App = () => {
  
 const [creds,setCreds]=useState({});
  return (
    <>
    {/* <Particles
                style={{
                  position: 'fixed',
                  height: '100%',
                  width: '100%'
                }}
                params={{
                    "particles": {
                        "number": {
                            "value": 75
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} /> */}
      <Container fluid style={{paddingBottom:'0', paddingTop: '0'}}>
        <CredentialsContext.Provider value={{creds,setCreds}}>
        <BrowserRouter>
        
          <Switch>
            <Route exact path="/problems" component={Problems} />
             <Route exact path="/logreg" component={LogReg}/>
             <Route exact path="/upsolve/rated" component={Upsolve}/>   
             <Route exact path="/laddersLevel" component={LaddersLevel}/>
             <Route exact path="/laddersTopic" component={LaddersTopic}/>
             <Route exact path="/practiceTopic" component={PracticeTopic}/>
             <Route exact path="/practiceLevel" component={PracticeLevel}/>
             <Route exact path="/laddersLevel/topic/page1" component={LaddersQuestionPage}/>
             <Route exact path="/upsolve/virtual" component={Virtual}/>
             <Route exact path="/profile" component={Profile}/>
            <Route component={Homepage} />
            <Route exact path="/home" component={Homepage}/>
          </Switch>
        </BrowserRouter>
        </CredentialsContext.Provider>
      </Container>
    </>
  );
};

export default App;
