import React, { useEffect, useRef } from 'react';

function FormInput({ name, id, myProps }) {
  const inputRef = useRef(null);
  useEffect(() => {
    if (id === 'id') {
      inputRef.current.focus();
    }
  }, []);
  return (
    <>
      <input type="text" name={id} id={name} {...myProps} ref={inputRef} />
    </>
  );
}

export default FormInput;
