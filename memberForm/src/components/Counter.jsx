import React, { useContext } from 'react';
import { CounterContext } from '../App';

function Counter() {
  let counter = useContext(CounterContext);
  return (
    <>
      <h1>Counter = {counter}</h1>
    </>
  );
}

export default Counter;
