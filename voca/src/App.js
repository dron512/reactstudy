import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id="wrap">
          <div id="main_header">
            <h1>VOCA</h1>
            <div id="menu">
              <h1>
                <Link to="days/1">1일차</Link>
                <Link to="days/2">2일차</Link>
                <Link to="days/3">3일차</Link>
              </h1>
            </div>
          </div>
          <div>
            <Switch>
              <Route exact path="/"></Route>
              <Route path="/days/:day"></Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
