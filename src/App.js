import './App.css';
import React from 'react';
import HomePage from './components/Home';
import Navbar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import ExploreCities from './components/ExploreCities';
import Mustique from './components/Cities/Mustique';
import Edinburgh from './components/Cities/Edinburgh';
import Florence from './components/Cities/Florence';
import Hamptons from './components/Cities/Hamptons';
import Cabo from './components/Cities/Cabo';
import NYC from './components/Cities/NYC';
import Amsterdam from './components/Cities/Amsterdam';
import Courchevel from './components/Cities/Courchevel';
import Marrakesh from './components/Cities/Marrakesh';
function App() {
  return (
    <div className='App'>
      <Router>
        <header>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/cities" element={<ExploreCities />} />
            <Route path="/mustique" element={<Mustique />} />
            <Route path="/edinburgh" element={<Edinburgh />} />
            <Route path="/florence" element={<Florence />} />
            <Route path="/hamptons" element={<Hamptons />} />
            <Route path="/cabo" element={<Cabo />} />
            <Route path="/NYC" element={<NYC />} />
            <Route path="/amsterdam" element={<Amsterdam/>} />
            <Route path="/courchevel" element={<Courchevel />} />
            <Route path="/marrakesh" element={<Marrakesh/>} />

          </Routes>
        </header>
      </Router>
    </div>
  );
}

export default App;
