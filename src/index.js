import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />,
  <BrowserRouter>
    <Routes>
      <Route exact path = "/" component={HomePage} />
      <Route exact path = "/cities" component={ExploreCities} />
      <Route exact path = "/mustique" component={Mustique} />
      <Route exact path = "/edinburgh" component={Edinburgh} />
      <Route exact path = "/florence" component={Florence} />
      <Route exact path = "/hamptons" component={Hamptons} />
      <Route exact path = "/cabo" component={Cabo} />
      <Route exact path = "/NYC" component={NYC} />
      <Route exact path = "/amsterdam" component={Amsterdam} />
      <Route exact path = "/courchevel" component={Courchevel} />
      <Route exact path = "/marrakesh" component={Marrakesh} />
      
      
    </Routes>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
