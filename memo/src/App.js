import './App.css';

import React, { useState } from 'react';
import MyComponent from './components/MyComponent';

function App() {
  console.log('App.js 랜더링');
  const [a, setA] = useState(0);

  const doA = () => {
    setA(a + 1);
  };
  return (
    <div className="App container">
      <h1>h1 text</h1>

      <button
        className="button"
        onClick={() => {
          setA(a - 1);
        }}
      >
        -
      </button>
      {a}
      <button className="button" onClick={doA}>
        +
      </button>
      <MyComponent aa={10} setAa={setA}></MyComponent>
      <MyComponent aa={100} setAa={setA}></MyComponent>
      <MyComponent aa={1000} setAa={setA}></MyComponent>
      <style jsx="true">{`
        .container {
          border: 1px solid #aaa;
        }
        .button {
          padding: 1rem;
          margin: 1rem;
        }
      `}</style>
    </div>
  );
}

export default App;
