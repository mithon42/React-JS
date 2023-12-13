import React, { useState } from "react";
import QRCode from "qrcode.react";

const QrCode = () => {
  const [text, setText] = useState("");
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="flex flex-col gap-5 p-5 items-center bg-blue-400">
      <h1 className="text-3xl font-semibold text-white">
        Text To QR Code Generator
      </h1>

      <div>
        <label htmlFor="text" className="text-white text-2xl">
          Enter Text:
        </label>
        <input
          id="text"
          type="text"
          placeholder="Enter Text Or Data"
          className="p-2 outline-none rounded-md text-xl"
          onChange={handleTextChange}
        />
      </div>

      {text && (
        <div className="p-4 rounded-xl bg-red-300">
          <QRCode value={text} />
        </div>
      )}
    </div>
  );
};

export default QrCode;
