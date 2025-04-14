import React from 'react';

/*
A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards.

Instructions: Given a phrase as a string, check if the phrase is a Palindrome. Only words and phrases will be checked.

*/



const IsPalindrome = () => {

  const checkIsPalindrome = str => {
    return false
  }

  // Test cases
  const testCases = [
    { caseNumber: 1, phrase: 'Not A Palindrome', expectedAnswer: false },
    { caseNumber: 2, phrase: 'kayak', expectedAnswer: true },
    { caseNumber: 3, phrase: 'Step on no pets', expectedAnswer: true },
    { caseNumber: 5, phrase: 'A man, a plan, a canal – Panama.', expectedAnswer: true },
    { caseNumber: 6, phrase: 'T. Eliot, top bard, notes putrid tang emanating, is sad; I\'d assign it a name: gnat dirt upset on drab pot toilet.', expectedAnswer: true },

  ];

  const results = testCases.map(testCase => {
    const {caseNumber, phrase, expectedAnswer} = testCase;
    const error = `☹️"${phrase}" should return ${expectedAnswer}`;
    const success = `😻 Case ${caseNumber} passed!`;
    return checkIsPalindrome(phrase) === expectedAnswer ? success : error;
  })

  return (
    <>
      <h2>Test Results</h2>
      {results.map((result, index) => <div key={index}>{result}</div>)}
    </>
  )
}

export default IsPalindrome