import React, { useState } from "react";

function Counter() {
  // Declare a state variable named "count" with initial value 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className="py-2 font-bold">Count: {count}</p>
      
      {/* Button to increment the count */}
      <button className="py-3 px-8 border-2 mr-2 rounded-lg font-bold" onClick={() => setCount(count + 1)}>Increment</button>

      {/* Button to decrement the count */}
      <button className="py-3 px-8 border-2 ml-2 rounded-lg font-bold" onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;