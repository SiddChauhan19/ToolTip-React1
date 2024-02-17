import React from 'react';
import './App.css';
import Tooltip from './Tooltip';

function App() {
  return (
    <div className="App">
      {/*  pass this tooltipText prop from App.js */}
      <Tooltip tooltipText="Hey this Tooltip Project using React is made by Me">
        <button className='btn'>Tooltip Button</button>
      </Tooltip>
    </div>
  );
}

export default App;
