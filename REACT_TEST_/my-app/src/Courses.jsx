import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 10)}>Increment</button>
      <button onClick={() => setCount(count - 10)}>Decrement</button>
    </div>
  );
}

export default Counter;

