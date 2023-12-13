import React, { useState } from "react";

function InputField() {
  const [text, setText] = useState("");

  return (
    <div className="py-2 bg-gray-400">
      <input
      className="p-2 text-xl rounded-md"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <p className="font-medium text-xl">
        You Typed: <span className="text-red-600">{text}</span>
      </p>
    </div>
  );
}

export default InputField;
