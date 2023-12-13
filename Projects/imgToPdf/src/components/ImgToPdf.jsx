import React, { useState } from "react";
import jsPDF from "jspdf";

const ImgToPdf = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [imagesSelected, setImagesSelected] = useState(false);

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    setImagesSelected(true);
  };
  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };
  const convertToPdfBtn = () => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      const pdf = new jsPDF("p", "mm", [img.width, img.height]);

      // Chech if the image width is greater then pdf page width
      if (img.width > pdf.internal.pageSize.getWidth) {
        const ratio = pdf.internal.pageSize.getWidth() / img.width;
        img.height *= ratio;
        pdf.addImage(image, "JPEG", 0, 0, pdf.internal.pageSize.getWidth());
      } else {
        pdf.addImage(image, "JPEG", 0, 0, img.width, img.height);
      }

      const fileName = fileName === "" ? "mypdf.pdf" : `${fileName}.pdf`;
      const blob = pdf.output("blob");
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.download = fileName;
      link.href = url;
      link.click();

      // lets clean up
      setTimeout(() => {
        URL.revokeObjectURL(url);
        setImage(null);
        setFileName("");
        setImagesSelected(false);
      }, 1000);
    };
  };

  return (
    <>
      <div className="container mx-auto py-5 bg-[#5bc1e9] rounded-b-lg">
        <div className="flex gap-10 flex-col items-center py-5 text-white">
          <h1 className="text-6xl font-bold">Image To PDF converter</h1>
          {/* Images Input/Upload */}
          <div>
            <label
              htmlFor="file_input"
              className="border py-2 px-5 text-3xl rounded-md"
            >
              Upload Images
            </label>
            <input
              id="file_input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          {imagesSelected && (
            <>
              {/* Images Preview */}
              <div className="w-[540px]">
                <img alt="Selected" src={image} />
              </div>

              {/* File Names */}
              <div>
                <input
                  type="text"
                  placeholder="Enter File Name"
                  className="p-4 rounded-lg text-2xl w-[30rem] outline-red-400 text-black"
                  value={fileName}
                  onChange={handleFileNameChange}
                />
              </div>

              {/* Download Button */}
              <button
                className="border py-2 px-5 text-3xl rounded-md"
                onClick={convertToPdfBtn}
              >
                Download PDF
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ImgToPdf;
