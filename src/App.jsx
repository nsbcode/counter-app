import React, { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  //State for counter
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    count < 10 && setCount((prev) => prev + 1);
  };

  const onDecrement = () => {
    count > 0 && setCount((prev) => prev - 1);
  };

  return (
    <Counter
      count={count}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  );
};

export default App;
