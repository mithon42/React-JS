import React from "react";
import { FaSearch } from "react-icons/fa";
import Html from "./Html";
import Css from "./Css";
import Javascript from "./Javascript";

function Home() {
  return (
    <>
      <div className="h-[80vh] w-full bg-bodyColor">
        <div className="w-full h-full flex flex-col gap-9 justify-center items-center">
          <h1 className="text-7xl font-bold text-white">Learn to code</h1>
          <h2 className=" text-[#FFF4A3] text-xl font-bold tracking-wide	">
            With the world's largest web developer site.
          </h2>
          <div className="w-[500px] h-11 flex items-center bg-white rounded-full">
            <input
              type="text"
              className="w-[80%] font-bold outline-none mx-2 pl-3"
              placeholder="Search our tutorials, e.g.HTML"
            />
            <span className="w-[20%] h-full flex items-center justify-center bg-brandColor rounded-r-full cursor-pointer">
              <FaSearch className="text-white" />
            </span>
          </div>
          <h3 className="text-lg font-bold text-white hover:text-[#FFF4A3] cursor-pointer underline">
            Not Sure Where To Begin?
          </h3>
        </div>
      </div>

      <Html/>
      <Css/>
      <Javascript/>
    </>
  );
}

export default Home;
