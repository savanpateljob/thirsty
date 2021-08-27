import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import Sliders from './components/slider/slider';
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Sliders />
    </React.Fragment>
  );
}

export default App;
