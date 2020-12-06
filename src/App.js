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
import Upsolve from "./pages/upsolve/upsolve.page"
import LogReg from "./pages/logreg/LogReg"
import Ladders from "./pages/ladders/Ladders"


//aos 5 for home page only
import '../node_modules/aos/dist/aos.css'
import '../node_modules/react-multi-carousel/lib/styles.css'
// CSS
import "./App.css";

const App = () => {
  return (
    <>
      <Container fluid>
        <BrowserRouter>
        
          <Switch>
            <Route exact path="/problems" component={Problems} />
             <Route exact path="/logreg" component={LogReg}/>
             <Route exact path="/upsolve" component={Upsolve}/>
             <Route exact path="/ladders" component={Ladders}/>
            <Route component={Homepage} />
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;
