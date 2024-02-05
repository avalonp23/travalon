import './App.css';
import React from 'react';
import HomePage from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <header id="header">
        <NavBar />
      </header>
      <HomePage />
    </div>
  );
}

export default App;
