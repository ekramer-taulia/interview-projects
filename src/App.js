import React, { useState } from "react";
import TodoClass from "./components/TodoClass";
import TodoHooks from "./components/TodoHooks";
import CSSExercise from "./components/CSSExercise";
import RomanNumerals from "./components/RomanNumerals";
import "./App.css";
import IsPalindrome from "./components/IsPalindrome";

function App() {
  const [currentPage, setCurrentPage] = useState("romanNumerals");

  return (
    <div className={`app ${currentPage}`}>
      <button className="todo-hooks" onClick={() => setCurrentPage('hooks')}>Todo with Hooks</button>
      <button className="todo-class" onClick={() => setCurrentPage('class')}>Todo with Class</button>
      <button className="roman-numerals" onClick={() => setCurrentPage('romanNumerals')}>Roman Numerals</button>
      <button className="is-palindrome" onClick={() => setCurrentPage('isPalindrome')}>Is Palindrome</button>
      <button className="css" onClick={() => setCurrentPage('css')}>CSS</button>
      <hr />
      {currentPage === "hooks" && <TodoHooks />}
      {currentPage === "class" && <TodoClass />}
      {currentPage === "romanNumerals" && <RomanNumerals />}
      {currentPage === "isPalindrome" && <IsPalindrome />}
      {currentPage === "css" && <CSSExercise />}
    </div>
  );
}

export default App;
