import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Home from './components/Home'
import Education from './components/Education'
function App() {
    return (
        <Router>
            <div className="App">
            <div className="shape" />
      <div className="shape" />
      <div className="shape" />
      <div className="shape" />
      <div className="shape" />
      <div className="shape" />
      <div className="shape" />
      <div className="shape" />
      <div className="shape" />
      <div className="shape" />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/Education" element={<Education />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
