import React from "react";
import SubNavbar from "./SubNavbar";
import { logo } from "../../assets";
import {
  FaCaretDown,
  FaSearch,
  FaToggleOn,
  FaToggleOff,
  FaCode,
} from "react-icons/fa";
import { BsGpuCard } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="sticky top-0">
      <div className="px-5 bg-white flex justify-between items-center">
        <div className="flex gap-2">
          <a href="#" className="py-2">
            <img src={logo} alt="logo-image" className="w-10" />
          </a>

          <ul className="flex ml-2 capitalize">
            <li className="flex px-4 items-center cursor-pointer text-md hover:bg-brandColor">
              <span>tutorials</span>
              <FaCaretDown />
            </li>
            <li className="flex px-4 items-center cursor-pointer text-md hover:bg-brandColor">
              <span>exercises</span>
              <FaCaretDown />
            </li>
            <li className="flex px-4 items-center cursor-pointer text-md hover:bg-brandColor">
              <span>certificates</span>
              <FaCaretDown />
            </li>
            <li className="flex px-4 items-center cursor-pointer text-md hover:bg-brandColor">
              <span>services</span>
              <FaCaretDown />
            </li>
          </ul>

          <div className="flex gap-3 items-center">
            <div className="flex gap-1 items-center border-2 hover:border-brandColor border-[#f1f1f1] py-1 px-3 rounded-full">
              <input
                type="text"
                className="bg-transparent py-1 outline-none w-[150px]"
                placeholder="Search"
              />
              <FaSearch className="cursor-pointer" />
            </div>
            <div className="flex items-center cursor-pointer p-2 rounded-full hover:bg-[#f1f1f1]">
              <FaToggleOn className="text-2xl" />
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex gap-2 py-2 px-4 items-center cursor-pointer rounded-full hover:bg-[#f1f1f1]">
            <FaCode className="text-[#9763F6] text-xl" />
            <span className="capitalize">spaces</span>
          </button>

          <button className="flex gap-2 py-2 px-4 items-center cursor-pointer rounded-full hover:bg-[#f1f1f1]">
            <BsGpuCard className="text-[#9763F6] text-xl" />
            <span className="capitalize">get certified</span>
          </button>

          <div className="flex bg-[#059862cc] hover:bg-brandColor rounded-full">
            <button className="capitalize bg-[#4e8d76] py-2 px-4 rounded-full text-white">
              sing up
            </button>
            <button className="capitalize py-2 px-4 rounded-full text-white">
              log in
            </button>
          </div>
        </div>
      </div>
      <SubNavbar />
    </nav>
  );
}

export default Navbar;
