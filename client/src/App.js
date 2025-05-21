import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Home, Board, Sponsors, Resources, ResumeBook } from "./pages";
import { Footer, Navigation } from "./molecules";
import Login from "./pages/Login/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/resume-book" exact component={ResumeBook} />
          <Route path="/board" exact component={Board} />
          <Route path="/sponsors" exact component={Sponsors} />
          <Route path="/resources" exact component={Resources} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;