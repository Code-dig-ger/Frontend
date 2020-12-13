// REACT
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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

//aos 5 for home page only
import '../node_modules/aos/dist/aos.css'
import '../node_modules/react-multi-carousel/lib/styles.css'
// CSS
import "./App.css";

const App = () => {
  return (
    <>
    <Particles
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
                }} />
      <Container fluid style={{paddingBottom:'0', paddingTop: '0'}}>
        <BrowserRouter>
        
          <Switch>
            <Route exact path="/problems" component={Problems} />
             <Route exact path="/logreg" component={LogReg}/>
             <Route exact path="/upsolve" component={Upsolve}/>
             <Route exact path="/laddersLevel" component={LaddersLevel}/>
             <Route exact path="/laddersTopic" component={LaddersTopic}/>
             <Route exact path="/practiceTopic" component={PracticeTopic}/>
             <Route exact path="/practiceLevel" component={PracticeLevel}/>
            <Route component={Homepage} />
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;
