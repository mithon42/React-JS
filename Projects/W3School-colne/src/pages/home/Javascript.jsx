import React from "react";
import { javascriptBg } from "../../assets";

function Javascript() {
  return (
    <div className="bg-black py-14 px-10 flex justify-center gap-5">
      <div className="w-[430px] text-center flex flex-col justify-center">
        <h2 className="text-[80px] font-bold text-white">Jacascript</h2>
        <p className="font-bold text-lg text-white">
          The language for programming web pages
        </p>

        <div className="flex flex-col mx-auto mt-6 gap-6">
          <button className="text-white w-[200px] h-[45px] rounded-full font-medium bg-brandColor">
            Learn Javascript
          </button>
          <button className="text-black w-[200px] h-[45px] rounded-full font-medium bg-white">
            Javascript Reference
          </button>
          <button className="text-black w-[200px] h-[45px] rounded-full font-medium bg-[#FFB3BB]">
            Get Certified
          </button>
        </div>
      </div>

      <div className="bg-[#E7E9EB] pt-5 pb-3 px-3 w-[430px] rounded-md shadow-2xl flex flex-col gap-3">
        <h4 className="text-xl font-bold">HTML Example:</h4>
        <img src={javascriptBg} alt="javascript-img" />
        <button className="text-white w-[200px] h-[45px] rounded-full font-medium bg-brandColor">
          Try it Yourself
        </button>
      </div>
    </div>
  );
}

export default Javascript;
