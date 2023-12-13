import React, { useState, useEffect } from 'react';

function SimpleExample() {
  // State using useState
  const [message, setMessage] = useState('Hello, useEffect!');

  // useEffect for side effect
  useEffect(() => {
    // This function will be called after the component renders
    console.log('Component has mounted.');

    // Clean-up function (optional)
    return () => {
      console.log('Component will unmount.');
    };
  }, []); // An empty dependency array means the effect runs once after the initial render

  // Render the component with the state
  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage('Updated message!')}>Update Message</button>
    </div>
  );
}

export default SimpleExample;