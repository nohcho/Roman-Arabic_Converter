import React, { useState } from 'react';

type RomanType = {
  num: string;
  roman: string;
};

type IsMatch = {
  [key: string]: number;
};

const Converter = () => {
  const state = {
    num: '',
    roman: ''
  };
  const [values, setValues] = useState<RomanType>(state);

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

  const FromRoman = (romanNum: string) => {
    romanNum = romanNum.toUpperCase();
    const RomanLetters: IsMatch = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
    const letterConvert = (letter: string) => RomanLetters[letter];
    return romanNum.split('').reduce((acc, current, index, arr) => {
      if (letterConvert(current) < letterConvert(arr[index + 1])) {
        return acc - letterConvert(current);
      } else {
        return acc + letterConvert(current);
      }
    }, 0);
  };

  const ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <label>Enter any number</label>
      <div>
        <input
          type="text"
          name="num"
          aria-label="ArabicNumbers"
          onChange={ChangeHandler}
          placeholder="Enter a number"
        />
        <p>{values.num ? ToRoman(parseInt(values.num)) : 'Output'}</p>
      </div>
      <label>Enter a letter: I, V, X, L, C, D, M</label>
      <div>
        <input
          type="text"
          name="roman"
          aria-label="RomanLetters"
          onChange={ChangeHandler}
          placeholder="Enter a letter"
        />
        <p>{values.roman ? FromRoman(values.roman) : 'Output'}</p>
      </div>
    </form>
  );
};

export default Converter;
