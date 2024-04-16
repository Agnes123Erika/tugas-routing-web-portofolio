import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Materi/Routing/home';
import AboutMe from './Materi/Routing/aboutme'; // Make sure this component exists
import Portfolio from './Materi/Routing/portofolio'; // Make sure this component exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
