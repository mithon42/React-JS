import React, { useState } from "react";
import jsPDF from "jspdf";

const ImageToPdf = () => {
  const [imageURLs, setImageURLs] = useState([]);
  const [pdf, setPdf] = useState(null);

  const handleImageChange = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      const imageArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImageURLs((prevImages) => [...prevImages, ...imageArray]);
    }
  };

  const convertToPdf = () => {
    const pdfDoc = new jsPDF();

    imageURLs.forEach((image, index) => {
      const imgElement = new Image();
      imgElement.src = image;

      imgElement.onload = () => {
        const imgWidth = pdfDoc.internal.pageSize.getWidth();
        const imgHeight = (imgElement.height * imgWidth) / imgElement.width;

        if (index !== 0) {
          pdfDoc.addPage(); // Add a new page for each image except the first one
        }

        pdfDoc.addImage(imgElement, "JPEG", 0, 0, imgWidth, imgHeight);
        setPdf(pdfDoc);
      };
    });
  };

  const downloadPdf = () => {
    if (pdf) {
      pdf.save("converted.pdf");
    }
  };

  const clearImages = () => {
    setImageURLs([]);
    setPdf(null);
  };

  return (
    <div className="text-center p-5 bg-red-300">
      <input
        className="p-2 text-2xl border border-green-300 mx-2 rounded-md font-bold cursor-pointer"
        type="file"
        onChange={handleImageChange}
        multiple
      />
      <button
        className="p-2 text-2xl border border-green-300 mx-2 rounded-md text-white font-bold"
        onClick={convertToPdf}
      >
        Convert to PDF
      </button>
      <button
        className="p-2 text-2xl border border-green-300 mx-2 rounded-md text-white font-bold"
        onClick={downloadPdf}
        disabled={!pdf}
      >
        Download PDF
      </button>
      <button
        className="p-2 text-2xl border border-green-300 mx-2 rounded-md text-white font-bold"
        onClick={clearImages}
      >
        Clear
      </button>

      {/* Images Viewer */}
      {imageURLs.map((url, index) => (
        <img key={index} src={url} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageToPdf;
