import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/Textform';
import React, { useState } from 'react';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
    document.body.style.backgroundColor = mode === 'light' ? 'grey' : 'white';
  };
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
    <div className="Container">
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/" element={<TextForm heading=" Enter the text form to analyze " mode={mode} />} />
      </Routes>
    </div>
    </Router>
  </>
  );
}

export default App;
