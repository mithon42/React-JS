import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links, socialLinks } from "../data/LinkData";

// React icons
import {
  FaBars,
  FaDribbble,
  FaFacebookF,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <nav className="py-4 px-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white font-poppins">
          Programmer<span className="text-orange-500">Mithon</span>
        </a>

        {/* Navitems for lg devices */}
        <ul className="md:flex gap-12 text-lg hidden font-roboto">
          {links.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Menu icons */}
        <div className="text-white lg:flex gap-4 items-center hidden">
          <a href={socialLinks.facebook} className="hover:text-orange-500">
            <FaFacebookF />
          </a>
          <a href={socialLinks.website} className="hover:text-orange-500">
            <FaDribbble />
          </a>
          <a href={socialLinks.twitter} className="hover:text-orange-500">
            <FaTwitter />
          </a>
          <button className="bg-orange-500 px-6 py-2 font-medium font-roboto rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
            Log in
          </button>
        </div>

        {/* Mobile Menu btn, display mobile screen */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {showMenu ? (
              <FaXmark className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Menu items only for mobile */}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white font-roboto ${
            showMenu
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
              : "hidden"
          }`}
        >
          {links.map(({ name, path }, index) => (
            <li key={index} className="text-black">
              <NavLink to={path} onClick={toggleMenu}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
