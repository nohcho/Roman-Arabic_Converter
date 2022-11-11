import React, { useState } from 'react';

type RomanType = {
  num: string;
  roman: string;
};

const ToRoman = (num: number) => {
  let roman = '',
    romanLetters = [
      'M',
      'CM',
      'D',
      'CD',
      'C',
      'XC',
      'L',
      'XL',
      'X',
      'IX',
      'V',
      'IV',
      'I'
    ],
    listOfNumber = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const length = romanLetters.length;
  for (let i = 0; i < length; i++) {
    while (num >= listOfNumber[i]) {
      roman = roman + romanLetters[i];
      num = num - listOfNumber[i];
    }
  }
  return roman;
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
