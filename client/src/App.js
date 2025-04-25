import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Board, Sponsors, Resources, Test, ResumeBook } from "./pages";
import { Footer, Navigation } from "./molecules";
import ProgressBar from "react-scroll-progress-bar";
import Calendar from "./atoms/CalendarSlots/Calendar";
import CalendarEmbed from "./atoms/CalendarSlots/CalendarEmbed";

function App() {
  return (
    <div className="App">
      <ProgressBar bgcolor="#b81c34" />
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/board" exact component={() => <Board />} />
          <Route path="/sponsors" exact component={() => <Sponsors />} />
          <Route path="/resources" exact component={() => <Resources />} />
          {/* <Route path="/calendar" exact component={() => <Calendar />} /> */}
          <Route path="/calendar" exact component={() => <CalendarEmbed />} />
          <Route path="/resume-book" exact component={() => <ResumeBook />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
