import React from "react";

/*
Instructions: Given a Roman numeral string, return the integer.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
*/

const RomanNumerals = () => {
  const hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const romanToInt = (str) => {
    const stringArray = str.split("");

    let skipNext = false;

    const integer = stringArray.reduce((accumulator, current, index) => {
      if (skipNext) {
        skipNext = false;
        return accumulator;
      }
      if (current === "I" && stringArray[index + 1] === "V") {
        skipNext = true;
        return (accumulator += 4);
      }
      if (current === "I" && stringArray[index + 1] === "X") {
        skipNext = true;
        return (accumulator += 9);
      }
      if (current === "X" && stringArray[index + 1] === "L") {
        skipNext = true;
        return (accumulator += 40);
      }
      if (current === "X" && stringArray[index + 1] === "C") {
        skipNext = true;
        return (accumulator += 90);
      }
      if (current === "C" && stringArray[index + 1] === "D") {
        skipNext = true;
        return (accumulator += 400);
      }
      if (current === "C" && stringArray[index + 1] === "M") {
        skipNext = true;
        return (accumulator += 900);
      } 
      return (accumulator += hash[current]);
    }, 0);

    return isNaN(integer) ? "invalid string" : integer;
  };

  // Test cases
  const testCases = [
    { caseNumber: 1, romanNumeral: "III", expectedAnswer: 3 },
    { caseNumber: 2, romanNumeral: "IV", expectedAnswer: 4 },
    { caseNumber: 3, romanNumeral: "IX", expectedAnswer: 9 },
    { caseNumber: 4, romanNumeral: "LVIII", expectedAnswer: 58 },
    { caseNumber: 5, romanNumeral: "MCMXCIV", expectedAnswer: 1994 },
    { caseNumber: 6, romanNumeral: "LVIIN", expectedAnswer: "invalid string" },
  ];

  const results = testCases.map((testCase) => {
    const { caseNumber, romanNumeral, expectedAnswer } = testCase;
    const error = `☹️"${romanNumeral}" should return ${expectedAnswer}`;
    const success = `😻 Case ${caseNumber} passed!`;
    return romanToInt(romanNumeral) === expectedAnswer ? success : error;
  });

  return (
    <>
      <h2>Test Results</h2>
      {results.map((result, index) => (
        <div key={index}>{result}</div>
      ))}
    </>
  );
};

export default RomanNumerals;
