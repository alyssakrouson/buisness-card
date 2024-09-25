import './App.css';
import React from 'react';
import NameCard from './components/NameCard.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div className="App">
      <NameCard/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
