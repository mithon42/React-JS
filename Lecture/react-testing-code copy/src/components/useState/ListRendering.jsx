import React, { useState } from "react";

function ListRendering() {
  const [items, setItems] = useState(["Item 1", "Item 2"]);

  return (
    <div className="bg-cyan-200 py-2">
      <button
        className="bg-black text-white p-2 rounded mb-2"
        onClick={() => setItems([...items, `Item list ${items.length + 1}`])}
      >
        Add Item
      </button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListRendering;
