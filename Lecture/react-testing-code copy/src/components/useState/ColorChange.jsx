import React, { useState } from 'react';

function ColorChange() {
  const [color, setColor] = useState('blue');

  return (
    <div style={{ backgroundColor: color, padding: '10px' }}>
      <p className='text-white py-2'>Background Color: {color}</p>

      <button className='p-2 border' onClick={() => setColor('red')}>Red</button>
      <button className='p-2 border' onClick={() => setColor('green')}>Green</button>
      <button className='p-2 border' onClick={() => setColor('blue')}>Blue</button>
    </div>
  );
}

export default ColorChange;