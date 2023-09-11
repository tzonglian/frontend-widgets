import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Accordions from './widgets/accordions';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="/accordions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Accordions
        </a> */}
        <Link to="accordions">Accordions widget</Link>
      </header>
      <Routes> 
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/accordions" element={<Accordions />} />
      </Routes>
    </div>
  );
}

export default App;