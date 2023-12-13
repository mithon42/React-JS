import React from "react";
import { cssBg } from "../../assets";

function Css() {
  return (
    <div className="bg-[#FFF4A3] py-14 px-10 flex justify-center gap-5">
      <div className="w-[430px] text-center flex flex-col justify-center">
        <h2 className="text-[80px] font-bold">CSS</h2>
        <p className="font-bold text-lg">The language for styling web pages</p>

        <div className="flex flex-col mx-auto mt-6 gap-6">
          <button className="text-white w-[200px] h-[45px] rounded-full font-medium bg-brandColor">
            Learn CSS
          </button>
          <button className="text-white w-[200px] h-[45px] rounded-full font-medium bg-black">
            CSS Reference
          </button>
          <button className="text-black w-[200px] h-[45px] rounded-full font-medium bg-[#FFB3BB]">
            Get Certified
          </button>
        </div>
      </div>

      <div className="bg-[#E7E9EB] pt-5 pb-3 px-3 w-[430px] rounded-md shadow-2xl flex flex-col gap-3">
        <h4 className="text-xl font-bold">HTML Example:</h4>
        <img src={cssBg} alt="css-img" />
        <button className="text-white w-[200px] h-[45px] rounded-full font-medium bg-brandColor">
          Try it Yourself
        </button>
      </div>
    </div>
  );
}

export default Css;
