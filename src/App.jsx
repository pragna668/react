import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Counter</h1>
      <h2>Count:{count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;