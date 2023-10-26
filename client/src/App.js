import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Board,
  Sponsors,
  Resources,
} from "./components";
import ProgressBar from "react-scroll-progress-bar";
function App() {
  return (
    <div className="App">
      <ProgressBar bgcolor="#b81c34" />
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/board" exact>
            <Board />
          </Route>
          <Route path="/sponsors" exact>
            <Sponsors />
          </Route>
          <Route path="/resources" exact>
            <Resources />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
