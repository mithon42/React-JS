import React, { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="bg-red-300">
      <p>Toggle: {isOn ? "ON" : "OFF"}</p>

      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
}

export default ToggleButton;
