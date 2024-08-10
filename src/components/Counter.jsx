import React from "react";
import "./Counter.css";

const Counter = ({ count, onIncrement, onDecrement }) => {
  console.log(count);

  return (
    <div className="container">
      <div className="wrapper">
        <button onClick={onIncrement}>+</button>
        <h1>{count}</h1>
        <button onClick={onDecrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
