import React, { useRef, useState } from 'react';

import './App.css';

function App() {
  const [myid, setId] = useState('');
  const $id = useRef();
  const idKeyDownFunction = (e) => {
    $id.value = e.target.value;
    setId($id.value);
  };
  return (
    <div className="App">
      <div>
        <h1>memberJoin</h1>
        <div className="divBox">
          <form>
            <div className="divInput">
              <label>ID</label>
              <input
                type="text"
                name="id"
                id="id"
                autoFocus
                ref={$id}
                onKeyDown={idKeyDownFunction}
              />
            </div>
            <div className="divInput">
              <label>PASSWORD</label>
              <input type="text" name="password" id="password" />
            </div>
            <div className="divInput">
              <label>REPASSWORD</label>
              <input type="text" name="conPassword" id="conPassword" />
            </div>
            <div>
              <input type="submit" value="memberJoin" />
            </div>
            id ={myid}
          </form>
        </div>
        @ parkmyounghoi made
      </div>
    </div>
  );
}

export default App;
