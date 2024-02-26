import './App.css';
import React from 'react';
import HomePage from './components/Home';
import Navbar from './components/NavBar';

function App() {
  return (
    <div>
      <header id="header">
        <Navbar />
      </header>
      <HomePage />
    </div>
  );
}

export default App;
