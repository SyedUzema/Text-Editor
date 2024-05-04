import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/Textform';
import React, { useState } from 'react';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
    document.body.style.backgroundColor = mode === 'light' ? 'grey' : 'white';
  };
  return (
    <>
    <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
    <div className="Container">
    <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/">
          <TextForm heading=" Enter the text form to analyze " mode={mode}/>
          </Route>
        </Switch>
    <About/>
    </div>
    </>
  );
}

export default App;
