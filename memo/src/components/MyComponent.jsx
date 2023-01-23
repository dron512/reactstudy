import React, { memo, useState } from 'react';
import styled from 'styled-components';

const Mybutton = styled.button`
   {
    padding: 1rem;
    margin: 1rem;
  }
`;

const MyComponent = memo((props) => {
  const { aa, setAa } = props;
  console.log('MyComponent 랜더링');

  const [myc, setMyc] = useState('myc value');

  return (
    <>
      <Mybutton
        onClick={() => {
          setAa(aa + 10);
        }}
      >
        {aa}
      </Mybutton>
      <h1>{myc}</h1>
      <button
        style={{ padding: '1rem' }}
        onClick={() => {
          console.log('test');
          setMyc('value change');
        }}
      >
        button
      </button>
    </>
  );
});

export default MyComponent;
