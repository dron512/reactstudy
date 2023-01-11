import React, { createContext, useState } from 'react';
import Button from '@mui/material/Button';
import './App.css';
import FormInput from './components/FormInput';
import Counter from './components/Counter';

export const CounterContext = createContext(0);

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>
        <CounterContext.Provider value={count}>
          <Counter></Counter>
        </CounterContext.Provider>
        <Button
          variant="contained"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </Button>
        <h1>memberJoin</h1>
        <div className="divBox">
          <form>
            <div className="divInput">
              <label>ID</label>
              <FormInput
                name="id"
                id="id"
                myProps={{ placeholder: '아이디를 입력하하세요', autoFocus: true }}
              />
            </div>
            <div className="divInput">
              <label>PASSWORD</label>
              <FormInput
                name="password"
                id="password"
                myProps={{ placeholder: '패스워드를 입력하세요' }}
              />
            </div>
            <div className="divInput">
              <label>REPASSWORD</label>
              <FormInput
                name="conPassword"
                id="conPassword"
                myProps={{ placeholder: '패스워드를 입력하세요' }}
              />
            </div>
            <div>
              <Button variant="contained">전송</Button>
            </div>
          </form>
        </div>
        @ parkmyounghoi made
      </div>
    </div>
  );
}

export default App;
