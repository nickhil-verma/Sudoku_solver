import "./App.css";
import React, { useState, useEffect } from 'react';
import Sudoku from "./Sudoku";

function App() {
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTitle(prevState => !prevState);
    }, 2000); // Change the interval duration as needed (2000ms = 2 seconds)

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      {showTitle ? (
        <h1 id="title">Sudoku Solver</h1>
      ) : (
        <h1 id="title">-Nikhil Verma</h1>
      )}
      <Sudoku />
    </div>
  );
}

export default App;
