import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    Navigation,
    Footer,
    Home,
    Board,
    Sponsers,
    Resources,
} from "./components";
function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/board" exact component={() => <Board />} />
                    <Route
                        path="/sponsers"
                        exact
                        component={() => <Sponsers />}
                    />
                    <Route
                        path="/resources"
                        exact
                        component={() => <Resources />}
                    />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
