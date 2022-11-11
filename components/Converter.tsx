import React, { useState } from 'react';

type RomanType = {
  num: string;
  roman: string;
};


const Converter = () => {
  const state = {
    num: '',
    roman: ''
  };
  const [values, setValues] = useState<RomanType>(state);

  

  return (
    <form>
      <label>Enter any number</label>
      <div>
        <input
          type="text"
          name="num"
          aria-label="ArabicNumbers"
          placeholder="Enter a number"
        />
      </div>
      <label>Enter a letter: I, V, X, L, C, D, M</label>
      <div>
        <input
          type="text"
          name="roman"
          aria-label="RomanLetters"
          placeholder="Enter a letter"
        />
      </div>
    </form>
  );
};

export default Converter;
