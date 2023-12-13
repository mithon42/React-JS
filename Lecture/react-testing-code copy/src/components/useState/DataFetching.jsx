import React, { useState, useEffect } from 'react';

function DataFetching() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating API call with a delay
    setTimeout(() => {
      // Assuming fetchData is a function that fetches data from an API
      // Replace it with your actual data fetching logic
      const newData = ['Item 1', 'Item 2', 'Item 3'];
      setData(newData);
    }, 1000);
  }, []); // Empty dependency array means it runs once after the initial render

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
