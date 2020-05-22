import React from 'react';
import logo from './logo.svg';
import './App.css';

import Avatar from './avatar.js';
import Map from './map.js';
import Game from './game.js'
import MapSelect from './mapSelect.js'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <Game/> */}
      <MapSelect></MapSelect>
      {/* <Map> */}
        {/* <Avatar/> */}
      {/* </Map> */}
      
    </div>
  );
}

export default App;
