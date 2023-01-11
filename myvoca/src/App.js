import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Content from "./components/Content";
import Days from "./components/Days";
import Slider from "react-slick";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="App">
      <BrowserRouter>
        <div id="wrap">
          <div id="main_header">
            <h1>
              <Link to="/">VOCA</Link>
            </h1>
            <div id="menu">
              <ul>
                <li>
                  <Link to="days/1">1일차</Link>
                </li>
                <li>
                  <Link to="days/2">2일차</Link>
                </li>
                <li>
                  <Link to="days/3">3일차</Link>
                </li>
              </ul>
            </div>
          </div>
          <div id="main_content">
            <Routes>
              <Route exact path="/" element={<Content></Content>}></Route>
              <Route path="/days/:day" element={<Days></Days>}></Route>
            </Routes>
          </div>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
          <div id="main_footer">@copy right park myoung hoi</div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
