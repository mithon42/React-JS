import React, {useState, useEffect} from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `Count: ${count}`;
  
      return () => {};
    }, [count]);
  
    // Render the component with the updated state
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }

export default UseEffect;