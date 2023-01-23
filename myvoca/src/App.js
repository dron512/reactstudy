import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Content from "./components/Content";
import Days from "./components/Days";

import data from "./db.json";

export const initialData = {
  aaa: {
    aa: "0",
    bb: "10",
  },
  bbb: {
    aa: "10",
    bb: "100",
  },
};

export const ContextMyObj = createContext({
  myobj: initialData.bbb,
  setMyobj: () => {},
});

function App() {
  const [myobj, setMyobj] = useState(initialData.bbb);
  useEffect(() => {
    setTimeout(() => {
      if (myobj.aa === "0") setMyobj({ ...myobj.bbb, aa: "100" });
      else setMyobj({ ...myobj.bbb, aa: "200" });
    }, 5000);
  }, [myobj]);
  return (
    <div className="App">
      myobj.aa = {myobj.aa}
      <BrowserRouter>
        <div id="wrap">
          <div id="main_header">
            <h1>
              <Link to="/">VOCA</Link>
            </h1>
            <div id="top_menu">
              <ul>
                <li>
                  <Link to="dayadd">날짜추가</Link>
                </li>
                <li>
                  <Link to="wordadd">단어추가</Link>
                </li>
                <li>
                  <label htmlFor="dayList">날짜보기</label>
                </li>
              </ul>
            </div>
            <input type="checkbox" id="dayList" />
            <div id="bottom_menu">
              <ul>
                {data.days.map((data) => {
                  return (
                    <li key={`${data.date}`}>
                      <Link to={`days/${data.date}`}>{data.date}일차</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div id="main_content">
            <ContextMyObj.Provider value={{ myobj, setMyobj }}>
              <Routes>
                <Route exact path="/" element={<Content></Content>}></Route>
                <Route path="/days/:day" element={<Days></Days>}></Route>
              </Routes>
            </ContextMyObj.Provider>
          </div>

          <div id="main_footer">@copy right park myoung hoi</div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
