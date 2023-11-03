import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board/*" element={<Board />} />
          <Route path="/sponsors/*" element={<Sponsors />} />
          <Route path="/resources/*" element={<Resources />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
