import React, { useState } from "react";

const Counter = ({ initalCount }) => {
  const [count, setCount] = useState(initalCount);
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };
  const handleResetCount = () => {
    setCount(0);
  };
  const handleSwitch = () => {
    setCount((prev) => prev * -1);
  };
  return (
    <div>
      <h1>
        Count: <h3 data-testid="count">{count}</h3>
      </h1>
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleResetCount}>Reset</button>
        <button onClick={handleSwitch}>Switch</button>
      </div>
    </div>
  );
};

export default Counter;
