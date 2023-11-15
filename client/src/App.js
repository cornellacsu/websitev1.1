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
import ResumeBook from "./components/ResumeBook/ResumeBook"
import ProgressBar from "react-scroll-progress-bar";
function App() {
    return (
        <div className="App">
            <ProgressBar bgcolor="#b81c34" />
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/board" exact component={() => <Board />} />
                    <Route
                        path="/sponsors"
                        exact
                        component={() => <Sponsors />}
                    />
                    <Route
                        path="/resources"
                        exact
                        component={() => <Resources />}
                    />
                    <Route 
                        path="/resumebook"
                        exact
                        component={() => <ResumeBook />}
                    />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
