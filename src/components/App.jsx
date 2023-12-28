import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function multiply() {
    setCount(count * 5);
  }
  function divide() {
    setCount(count / 2);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-1</button>
      <button onClick={increase}>+1</button>
      <button onClick={multiply}>*5</button>
      <button onClick={divide}>/2</button>
    </div>
  );
}

export default App;
